'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

export type ColorMode = 'light' | 'dark';

/**
 * Chakra v3 delegates colour mode to next-themes. `attribute="class"` toggles a
 * `.dark` class on <html>, which drives both the Chakra semantic tokens (see
 * theme.ts) and the legacy CSS-variable overrides in globals.css. next-themes
 * injects its own before-paint script, so no manual no-flash script is needed.
 */
export function ColorModeProvider(props: ThemeProviderProps) {
  return <ThemeProvider attribute='class' disableTransitionOnChange {...props} />;
}

export interface UseColorModeReturn {
  colorMode: ColorMode | undefined;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = (forcedTheme ?? resolvedTheme) as ColorMode | undefined;
  const setColorMode = (mode: ColorMode) => setTheme(mode);
  const toggleColorMode = () => setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  return { colorMode, setColorMode, toggleColorMode };
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}
