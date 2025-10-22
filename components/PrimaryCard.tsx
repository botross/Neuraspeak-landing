"use client";

import { clsx } from 'clsx';
import React from 'react';

type PrimaryCardProps = React.HTMLAttributes<HTMLDivElement>;

const PrimaryCard = React.forwardRef<HTMLDivElement, PrimaryCardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'glass-card relative overflow-hidden p-6 sm:p-8',
          'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/6 before:via-transparent before:to-neon-300/10 before:pointer-events-none',
          className,
        )}
        {...rest}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

PrimaryCard.displayName = 'PrimaryCard';

export default PrimaryCard;
