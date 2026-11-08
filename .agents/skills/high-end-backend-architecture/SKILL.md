---
name: high-end-backend-architecture
description: >-
  Enterprise-grade backend and MERN engineering patterns: Layered Clean Architecture,
  Prisma ORM optimization, Redis Cache-Aside & rate-limiting, Mongoose indexing,
  strict Zod validation, centralized error handling, and production Docker multi-stage configurations.
---

# High-End Backend & MERN Architecture Skill

Complete blueprints for building resilient, high-throughput, maintainable backend services and MERN applications.

---

## 1. Layered Clean Architecture

Structure projects strictly separating HTTP transport from core business logic:

```
src/
├── controllers/      # Extract params/body, invoke service, return envelope
├── services/         # Core business logic, transactions, authorization
├── repositories/     # Data access layer (Prisma / Mongoose queries)
├── models/           # Schemas & interfaces (Prisma schema / Mongoose schemas)
├── middlewares/      # Auth, Rate limiting, Centralized error handler
├── routes/           # Express router definitions
└── utils/            # AppError, Logger, Envelope formatters
```

### Centralized AppError & Async Wrapper
```typescript
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational: boolean;
  public readonly details?: unknown;

  constructor(message: string, statusCode = 500, code = "INTERNAL_SERVER_ERROR", details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
```

### Global Error Handling Middleware
```typescript
export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const code = err instanceof AppError ? err.code : "INTERNAL_SERVER_ERROR";
  const message = err.message || "An unexpected error occurred.";

  res.status(statusCode).json({
    success: false,
    error: {
      code,
      message,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
      ...(err.details && { details: err.details }),
    },
  });
};
```

---

## 2. Prisma ORM Performance & Query Tuning

### A. Selective Projection (Prevent Overfetching)
```typescript
export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      profile: {
        select: { avatarUrl: true, bio: true },
      },
    },
  });
}
```

### B. Interactive ACID Transactions
```typescript
export async function transferBalance(senderId: string, recipientId: string, amount: number) {
  return prisma.$transaction(async (tx) => {
    const sender = await tx.account.findUnique({ where: { userId: senderId } });
    if (!sender || sender.balance < amount) {
      throw new AppError("Insufficient funds", 400, "INSUFFICIENT_FUNDS");
    }

    await tx.account.update({
      where: { userId: senderId },
      data: { balance: { decrement: amount } },
    });

    await tx.account.update({
      where: { userId: recipientId },
      data: { balance: { increment: amount } },
    });

    return tx.transactionLog.create({
      data: { senderId, recipientId, amount },
    });
  });
}
```

---

## 3. High-Throughput Redis Patterns

### A. Cache-Aside Pattern with Jittered TTL
```typescript
import { redis } from "../config/redis";

export async function getCachedOrFetch<T>(
  key: string,
  baseTtlSeconds: number,
  fetchFn: () => Promise<T>
): Promise<T> {
  const cached = await redis.get(key);
  if (cached) {
    return JSON.parse(cached) as T;
  }

  const fresh = await fetchFn();
  if (fresh) {
    // Add 10-20% jitter to prevent cache stampede
    const jitter = Math.floor(Math.random() * (baseTtlSeconds * 0.2));
    await redis.set(key, JSON.stringify(fresh), "EX", baseTtlSeconds + jitter);
  }
  return fresh;
}
```

### B. Sliding Window Rate Limiting (Redis Sorted Sets)
```typescript
export async function checkRateLimit(key: string, limit: number, windowSeconds: number): Promise<boolean> {
  const now = Date.now();
  const clearBefore = now - windowSeconds * 1000;

  const multi = redis.multi();
  multi.zremrangebyscore(key, 0, clearBefore);
  multi.zadd(key, now, `${now}-${Math.random()}`);
  multi.zcard(key);
  multi.expire(key, windowSeconds);

  const results = await multi.exec();
  const count = (results?.[2]?.[1] as number) || 0;

  return count <= limit;
}
```

---

## 4. Production Multi-Stage Dockerfile

```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Runner (Minimal & Non-root)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 appuser

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

USER appuser
EXPOSE 3000
CMD ["node", "dist/index.js"]
```
