import '../styles/globals.css';
import React from 'react';
import { clsx } from 'clsx';

export const metadata = {
  title: 'NeuraSpeak',
  description:'NeuraSpeak is the ultra-premium live translation studio that hears, understands, and responds faster than you can switch languages. Crafted for founders, diplomats, creators, and every traveler rewriting what "global" means.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="bg-midnight-900">
      <body
        className={clsx(
          'min-h-screen',
          'bg-midnight-900 text-midnight-50',
          'antialiased selection:bg-neon-300/40 selection:text-white',
        )}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-radial-grid opacity-60" />
            <div className="relative z-10">{children}</div>
          </main>
          <footer className="relative z-10 border-t border-midnight-700/40 bg-midnight-900/80 backdrop-blur py-8">
            <div className="mx-auto w-full max-w-5xl px-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-midnight-300">
              <p>
                &copy; {new Date().getFullYear()} NeuraSpeak.
                All rights reserved.
              </p>
              <div className="flex gap-4">
                <a className="hover:text-neon-300 transition" href="mailto:support@your-domain.com">
                  Support
                </a>
                <a className="hover:text-neon-300 transition" href="https://your-domain.com/privacy" target="_blank" rel="noreferrer">
                  Privacy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
