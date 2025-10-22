"use client";

import { clsx } from 'clsx';
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hint?: string;
  label: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, id, ...rest }, ref) => {
    const inputId = id ?? rest.name ?? label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-sm font-semibold text-midnight-200">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'w-full rounded-2xl border bg-midnight-800/60 px-4 py-3 text-base text-midnight-50 outline-none transition',
            'border-midnight-600/60 focus:border-neon-300/60 focus:ring-2 focus:ring-neon-300/40 focus:ring-offset-2 focus:ring-offset-midnight-900',
            error && 'border-red-400 focus:ring-red-400/30 focus:border-red-400',
            className,
          )}
          {...rest}
        />
        {hint && !error && <p className="text-xs text-midnight-300">{hint}</p>}
        {error && <p className="text-xs text-red-300">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
