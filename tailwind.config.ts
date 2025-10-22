import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#f8fafc',
          100: '#e2e8f0',
          200: '#cbd5f5',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1f2937',
          800: '#111827',
          900: '#020617',
        },
        neon: {
          100: '#a855f7',
          200: '#7c3aed',
          300: '#6366f1',
          400: '#3b82f6',
          500: '#0ea5e9',
        },
      },
      boxShadow: {
        glow: '0 0 45px rgba(99, 102, 241, 0.35)',
        'glow-sm': '0 0 25px rgba(59, 130, 246, 0.28)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.18), transparent 60%), radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.18), transparent 55%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(17, 24, 39, 0.6))',
      },
    },
  },
  plugins: [],
};

export default config;
