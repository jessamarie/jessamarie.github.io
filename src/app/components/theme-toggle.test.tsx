import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ThemeToggle from './theme-toggle';

beforeEach(() => {
  document.documentElement.removeAttribute('data-theme');
  localStorage.clear();
});

afterEach(() => cleanup());

describe('ThemeToggle', () => {
  it('renders an accessible toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: /toggle color theme/i })).toBeTruthy();
  });

  it('shows the moon icon in light mode and the sun after toggling to dark', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle color theme/i });
    expect(button.textContent).toContain('☾');

    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(button.textContent).toContain('☀');
  });

  it('toggles back to light on a second click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle color theme/i });
    fireEvent.click(button);
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(button.textContent).toContain('☾');
  });

  it('reflects an already-dark document on first render', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle color theme/i });
    expect(button.textContent).toContain('☀');
  });
});
