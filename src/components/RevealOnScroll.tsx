import React, { ElementType, ReactNode } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export type RevealVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-up';

interface RevealOnScrollProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: ElementType;
  id?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  className = '',
  as: Component = 'div',
  id,
}) => {
  const { ref, isRevealed } = useRevealOnScroll<HTMLElement>({
    threshold,
    rootMargin,
    delay,
  });

  const getVariantStyles = () => {
    switch (variant) {
      case 'fade-up':
        return isRevealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-7';
      case 'fade-in':
        return isRevealed
          ? 'opacity-100'
          : 'opacity-0';
      case 'fade-left':
        return isRevealed
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-7';
      case 'fade-right':
        return isRevealed
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-7';
      case 'scale-up':
        return isRevealed
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95';
      default:
        return isRevealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-7';
    }
  };

  return (
    <Component
      id={id}
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all will-change-[opacity,transform] ${getVariantStyles()} ${className}`}
    >
      {children}
    </Component>
  );
};
