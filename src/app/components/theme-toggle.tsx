'use client';

import { useState } from 'react';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  return 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  };

  return (
    <button
      type='button'
      className='theme-toggle'
      onClick={toggle}
      aria-label='Toggle color theme'
      title='Toggle color theme'
    >
      <span aria-hidden='true' suppressHydrationWarning>
        {theme === 'dark' ? '☀' : '☾'}
      </span>
    </button>
  );
}
