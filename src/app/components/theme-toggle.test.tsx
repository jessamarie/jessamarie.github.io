import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '../theme';
import { ColorModeProvider } from './color-mode';
import ThemeToggle from './theme-toggle';

function renderToggle() {
  return render(
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme='light' enableSystem={false}>
        <ThemeToggle />
      </ColorModeProvider>
    </ChakraProvider>,
  );
}

beforeEach(() => {
  document.documentElement.className = '';
  localStorage.clear();
});

afterEach(() => cleanup());

describe('ThemeToggle', () => {
  it('renders an accessible toggle button', () => {
    renderToggle();
    expect(screen.getByRole('button', { name: /toggle color theme/i })).toBeTruthy();
  });

  it('shows the moon icon in light mode and the sun after toggling to dark', async () => {
    renderToggle();
    const button = screen.getByRole('button', { name: /toggle color theme/i });
    await waitFor(() => expect(button.textContent).toContain('☾'));

    fireEvent.click(button);
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(button.textContent).toContain('☀');
    });
  });

  it('toggles back to light on a second click', async () => {
    renderToggle();
    const button = screen.getByRole('button', { name: /toggle color theme/i });

    fireEvent.click(button);
    await waitFor(() => expect(document.documentElement.classList.contains('dark')).toBe(true));

    fireEvent.click(button);
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(button.textContent).toContain('☾');
    });
  });

  it('persists the chosen mode to localStorage', async () => {
    renderToggle();
    const button = screen.getByRole('button', { name: /toggle color theme/i });

    fireEvent.click(button);
    await waitFor(() => expect(localStorage.getItem('theme')).toBe('dark'));
  });
});
