"use client";

import { clsx } from 'clsx';
import React from 'react';
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react';

type Variant = 'info' | 'success' | 'warning' | 'error';

const icons: Record<Variant, React.ReactNode> = {
  info: <Info className="h-5 w-5" />,
  success: <CheckCircle2 className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  error: <XCircle className="h-5 w-5" />,
};

const styles: Record<Variant, string> = {
  info: 'border-neon-300/30 bg-neon-300/10 text-neon-100',
  success: 'border-emerald-400/40 bg-emerald-400/15 text-emerald-200',
  warning: 'border-amber-400/40 bg-amber-400/15 text-amber-200',
  error: 'border-red-400/45 bg-red-500/15 text-red-200',
};

type AlertProps = {
  variant?: Variant;
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

const Alert: React.FC<AlertProps> = ({ variant = 'info', title, description, children, className }) => {
  return (
    <div
      className={clsx(
        'glass-card flex items-start gap-3 border px-4 py-3 text-sm shadow-glow-sm',
        styles[variant],
        className,
      )}
    >
      <span className="mt-1 text-base">{icons[variant]}</span>
      <div className="flex flex-col gap-1">
        {title && <p className="font-semibold text-base leading-tight">{title}</p>}
        {description && <p className="text-sm leading-relaxed text-midnight-100/90">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Alert;
