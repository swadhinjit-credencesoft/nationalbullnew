'use client';

import { motion, useInView, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const viewport = { once: true, margin: '-40px' } as const;

export function Reveal({
  children,
  variant = fadeUp,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'h1' | 'h2' | 'h3' | 'p' | 'article' | 'figure';
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variant}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  as = 'div',
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'section';
  amount?: number;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 1.8,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString('en-IN')}${suffix}`;
      }
    });
    return unsub;
  }, [spring, prefix, suffix]);

  return <span ref={ref} className={className}>{`${prefix}0${suffix}`}</span>;
}

/**
 * Word-by-word animated text reveal on scroll
 */
export function ScrollTextReveal({
  text,
  className = '',
  highlightWords = [],
  highlightColor = '#00f2fe',
}: {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
}) {
  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0.15,
      y: 12,
      filter: 'blur(3px)',
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35em' }}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isHighlight = highlightWords.some(
          (h) => h.toLowerCase() === cleanWord.toLowerCase()
        );
        return (
          <motion.span
            key={index}
            variants={child}
            style={{
              display: 'inline-block',
              color: isHighlight ? highlightColor : 'inherit',
              fontWeight: isHighlight ? 800 : 'inherit',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
}

/**
 * Luxury Kinetic Infinite Scroll Ticker Banner
 */
export function KineticScrollTicker({
  items,
  speed = 28,
  reverse = false,
  className = '',
}: {
  items: string[];
  speed?: number;
  reverse?: number | boolean;
  className?: string;
}) {
  return (
    <div
      className={`kinetic-ticker-wrap ${className}`}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <motion.div
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
        style={{
          display: 'flex',
          gap: '2.5rem',
          width: 'max-content',
          alignItems: 'center',
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            <span>{item}</span>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#00f2fe',
                boxShadow: '0 0 10px #00f2fe',
                display: 'inline-block',
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

