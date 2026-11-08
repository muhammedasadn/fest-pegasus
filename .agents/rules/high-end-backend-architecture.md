# High-End Backend & MERN Architecture Rules

These rules govern all backend services, API routes, data layers, and database queries across this workspace.

---

## 1. Clean Layered Architecture
Strict separation of concerns across 4 layers:
1. **Routes / Handlers**: Skinny endpoints. Parse & validate requests, invoke services, return standardized envelopes.
2. **Controllers**: Coordinate flow and map domain logic to HTTP responses.
3. **Services**: Pure business logic, authorization policies, transactions, and event triggers.
4. **Repositories / Data Access**: Direct queries via Prisma, Mongoose, or Redis.

---

## 2. API Design & Consistent Envelopes
Standardized response formats across all endpoints:

### Success Envelope
```json
{
  "success": true,
  "data": { ... },
  "meta": { "page": 1, "total": 100 }
}
```

### Error Envelope
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable error summary",
    "details": [ ... ]
  }
}
```

Use semantic HTTP status codes (`200`, `201`, `400`, `401`, `403`, `404`, `422`, `500`).

---

## 3. Strict Validation & Type Safety
- Validate all incoming request payloads, URL parameters, and environment variables using **Zod**.
- Infer types directly (`type CreateUserInput = z.infer<typeof CreateUserSchema>`).
- Centralize error handling with custom operational `AppError` subclasses.

---

## 4. Data Persistence & Performance

### A. Prisma ORM
- **Prevent N+1 Queries**: Use `include` or selective field projections (`select: { id: true, name: true }`) to eliminate overfetching.
- **Transactions**: Multi-table operations MUST be wrapped in `prisma.$transaction(async (tx) => { ... })`.
- **Indexing**: Maintain composite and single indexes on foreign keys and frequently filtered columns.

### B. Mongoose / MongoDB
- Read-only operations MUST use `.lean()` for high memory efficiency.
- Enforce schema-level indexes (`compound indexes`) for multi-attribute filtering.

### C. Redis Caching & State
- Cache-Aside pattern with deterministic keys (`entity:id:field`).
- Always configure a realistic TTL (Time-To-Live) with random jitter to prevent cache stampedes.
- Use Redis for sliding-window rate limiting, token revocation, and high-frequency counters.

---

## 5. Next.js App Router Architecture
- React Server Components (RSC) by default for data fetching and static rendering.
- Client boundaries (`"use client"`) confined to interactive leaf nodes.
- Validate inputs in Server Actions using Zod before database operations.
- Combine `revalidatePath()` / `revalidateTag()` with React 19 `useOptimistic` for zero-latency UI updates.
