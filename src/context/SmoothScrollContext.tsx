import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; immediate?: boolean }) => void;
  stop: () => void;
  start: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize Lenis with natural, responsive friction
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Handle initial hash navigation if URL contains a target section
    if (window.location.hash) {
      const hashTarget = document.querySelector(window.location.hash);
      if (hashTarget) {
        setTimeout(() => {
          lenis.scrollTo(hashTarget as HTMLElement, { offset: -76, immediate: true });
        }, 200);
      }
    }

    // Global listener for anchor clicks that target internal sections (#...)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const elem = document.querySelector(href);
        if (elem) {
          e.preventDefault();
          lenis.scrollTo(elem as HTMLElement, {
            offset: -76,
            immediate: prefersReducedMotion,
          });
          window.history.pushState(null, '', href);
        }
      } else if (href === '#') {
        e.preventDefault();
        lenis.scrollTo(0, { immediate: prefersReducedMotion });
        window.history.pushState(null, '', ' ');
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Listen to changes in prefers-reduced-motion
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (lenisRef.current) {
        lenisRef.current.options.smoothWheel = !e.matches;
        lenisRef.current.options.duration = e.matches ? 0 : 1.0;
      }
    };
    motionMediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      motionMediaQuery.removeEventListener('change', handleMotionChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (
    target: string | HTMLElement | number,
    options?: { offset?: number; immediate?: boolean }
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: options?.offset ?? -76,
        immediate: options?.immediate,
      });
    } else {
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const stop = () => lenisRef.current?.stop();
  const start = () => lenisRef.current?.start();

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo, stop, start }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

