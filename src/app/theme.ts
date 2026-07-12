import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

/**
 * Site design system, structured the Chakra way:
 *
 *  - `tokens`         primitive, mode-stable raw values (the brand scale).
 *  - `semanticTokens` role-based tokens that flip on `_light` / `_dark` and
 *                     reference the primitives above.
 *  - `textStyles`     the heading type scale, applied via <Heading textStyle>.
 *  - `globalCss`      page-level base styles (was globals.css), now token-driven.
 *
 * We override Chakra's built-in `bg`, `fg`, and `border` semantic tokens so the
 * Preflight reset and base `html` styles use our palette. This is the single
 * source of truth for colour — there is no parallel CSS-variable layer.
 */
const config = defineConfig({
  globalCss: {
    html: {
      minWidth: '360px',
      lineHeight: '1.6',
      fontWeight: '300',
      colorScheme: 'light dark',
      bg: 'bg',
      color: 'fg',
      transition: 'background-color 0.2s ease, color 0.2s ease',
    },
    body: {
      maxWidth: 'content',
      marginInline: '1rem',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      paddingTop: '2rem',
      // Center the column only once there's room to spare.
      '@media (min-width: 1024px)': { marginInline: 'auto' },
    },
    '::selection': {
      bg: 'accent',
      color: 'accent.contrast',
    },
    ':focus-visible': {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'accent',
      outlineOffset: '3px',
      borderRadius: '3px',
    },
    '*, *::before, *::after': {
      '@media (prefers-reduced-motion: reduce)': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important',
        scrollBehavior: 'auto !important',
      },
    },
  },
  theme: {
    tokens: {
      colors: {
        // Brand purple: two real stops of the accent ramp.
        brand: {
          300: { value: '#c9a0dc' },
          500: { value: '#8e44ad' },
        },
      },
      fonts: {
        body: { value: 'var(--font-dm-sans), sans-serif' },
        heading: { value: 'var(--font-dm-sans), sans-serif' },
      },
      sizes: {
        content: { value: '42rem' },
      },
    },
    semanticTokens: {
      colors: {
        // Overrides of Chakra built-ins — drive the reset + html base styles.
        bg: {
          DEFAULT: { value: { _light: '#ffffff', _dark: '#0f1115' } },
        },
        fg: {
          DEFAULT: { value: { _light: '#1a1a1a', _dark: '#e8e8ea' } },
          muted: { value: { _light: '#666666', _dark: '#9aa0a6' } },
        },
        border: {
          DEFAULT: { value: { _light: '#eaeaea', _dark: '#262a33' } },
        },
        // Site-specific roles.
        accent: {
          DEFAULT: { value: { _light: '{colors.brand.500}', _dark: '{colors.brand.300}' } },
          contrast: { value: { _light: '#ffffff', _dark: '#0f1115' } },
        },
        card: {
          bg: { value: { _light: '#ffffff', _dark: '#161922' } },
        },
        badge: {
          bg: { value: { _light: '#f2f4f6', _dark: '#1d2129' } },
          fg: { value: { _light: '#444444', _dark: '#c2c7cf' } },
        },
      },
      shadows: {
        card: {
          value: {
            _light: '0 0.5rem 1.2rem rgba(0, 0, 0, 0.08)',
            _dark: '0 0.5rem 1.4rem rgba(0, 0, 0, 0.5)',
          },
        },
      },
    },
    textStyles: {
      pageTitle: {
        value: {
          fontWeight: '700',
          fontSize: '2rem',
          lineHeight: '1.15',
          letterSpacing: '-0.01em',
          marginBottom: '1.25rem',
        },
      },
      sectionTitle: {
        value: {
          fontWeight: '600',
          fontSize: '1.25rem',
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          marginBottom: '0.5rem',
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
