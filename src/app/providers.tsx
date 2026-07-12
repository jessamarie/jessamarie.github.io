'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { EmotionRegistry } from './components/emotion-registry';
import { ColorModeProvider } from './components/color-mode';
import { system } from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <ChakraProvider value={system}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </ChakraProvider>
    </EmotionRegistry>
  );
}
