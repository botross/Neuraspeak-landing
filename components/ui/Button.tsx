"use client";

import { clsx } from 'clsx';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', loading = false, children, disabled, ...rest }, ref) => {
    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary:
        'primary-button px-5 py-3 rounded-2xl bg-gradient-to-r from-neon-300 via-neon-400 to-neon-500 text-white font-semibold shadow-glow-sm',
      secondary:
        'secondary-button px-5 py-3 rounded-2xl border border-neon-300/45 text-neon-200 font-semibold backdrop-blur bg-midnight-800/60',
      ghost:
        'px-5 py-3 rounded-2xl text-midnight-200 font-semibold hover:text-white hover:bg-midnight-800/70 transition border border-transparent',
    };

    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center gap-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-900 disabled:cursor-not-allowed disabled:opacity-60',
          variants[variant],
          className,
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
