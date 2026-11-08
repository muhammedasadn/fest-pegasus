import { Variants, Transition } from "framer-motion";

// Extracted from Framer compiled motion presets
export const SPRING_PRESETS = {
  // Standard entry spring (z preset)
  enter: {
    type: "spring",
    duration: 0.8,
    bounce: 0.25,
  } as Transition,

  // Staggered variants (J, Z, Ar)
  stagger1: {
    type: "spring",
    duration: 0.8,
    bounce: 0.25,
    delay: 0.08,
  } as Transition,

  stagger2: {
    type: "spring",
    duration: 0.8,
    bounce: 0.25,
    delay: 0.16,
  } as Transition,

  stagger3: {
    type: "spring",
    duration: 0.8,
    bounce: 0.25,
    delay: 0.24,
  } as Transition,

  // Tactile hover spring (kr preset)
  hover: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } as Transition,

  // Button compression & click
  button: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  } as Transition,

  // Accordion open/close (me preset)
  accordion: {
    type: "spring",
    duration: 0.35,
    bounce: 0.15,
  } as Transition,

  // Kinetic text appear reveal (yr preset)
  textReveal: {
    type: "spring",
    duration: 0.7,
    bounce: 0.35,
  } as Transition,

  // Continuous floating mirror loops (vr, br, Sr, Cr, Tr presets)
  floatHero: {
    type: "tween",
    ease: [0.45, 0, 0.55, 1],
    duration: 2.8,
    repeat: Infinity,
    repeatType: "mirror" as const,
  } as Transition,

  floatBadge1: {
    type: "tween",
    ease: [0.45, 0, 0.55, 1],
    duration: 2.34,
    repeat: Infinity,
    repeatType: "mirror" as const,
  } as Transition,

  floatBadge2: {
    type: "tween",
    ease: [0.45, 0, 0.55, 1],
    duration: 2.96,
    repeat: Infinity,
    repeatType: "mirror" as const,
  } as Transition,

  floatBadge3: {
    type: "tween",
    ease: [0.45, 0, 0.55, 1],
    duration: 2.41,
    repeat: Infinity,
    repeatType: "mirror" as const,
  } as Transition,

  floatBadge4: {
    type: "tween",
    ease: [0.45, 0, 0.55, 1],
    duration: 3.2,
    repeat: Infinity,
    repeatType: "mirror" as const,
  } as Transition,
};

// Section / Container fade-up variants
export const sectionFadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_PRESETS.enter,
  },
};

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Card lift & tilt hover variants (alternating -2deg and +2deg)
export const cardHoverLeftVariants: Variants = {
  initial: {
    y: 0,
    rotate: 0,
    boxShadow: "4px 4px 0px 0px #141414",
  },
  hover: {
    y: -6,
    rotate: -2,
    boxShadow: "6px 8px 0px 0px #141414",
    transition: SPRING_PRESETS.hover,
  },
};

export const cardHoverRightVariants: Variants = {
  initial: {
    y: 0,
    rotate: 0,
    boxShadow: "4px 4px 0px 0px #141414",
  },
  hover: {
    y: -6,
    rotate: 2,
    boxShadow: "6px 8px 0px 0px #141414",
    transition: SPRING_PRESETS.hover,
  },
};

// Button press & hover
export const buttonMotionVariants: Variants = {
  initial: {
    x: 0,
    y: 0,
    boxShadow: "4px 4px 0px 0px #141414",
  },
  hover: {
    y: -2,
    boxShadow: "5px 6px 0px 0px #141414",
    transition: SPRING_PRESETS.button,
  },
  tap: {
    x: 2,
    y: 2,
    boxShadow: "2px 2px 0px 0px #141414",
    transition: { duration: 0.1 },
  },
};

// Word kinetic appear reveal variants (Hero title)
export const wordRevealVariants: Variants = {
  hidden: {
    opacity: 0.001,
    y: 40,
    rotate: -6,
    filter: "blur(10px)",
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      ...SPRING_PRESETS.textReveal,
      delay: 0.1 + i * 0.06,
    },
  }),
};
