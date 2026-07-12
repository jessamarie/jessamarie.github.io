import { vi } from 'vitest';

// jsdom does not implement matchMedia, which next-themes calls to resolve the
// system colour scheme. Provide a minimal, always-light stub for tests.
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}
