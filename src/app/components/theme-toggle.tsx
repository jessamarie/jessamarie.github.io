'use client';

import { useEffect, useState } from 'react';
import { chakra } from '@chakra-ui/react';
import { useColorMode } from './color-mode';

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  // The resolved colour mode isn't known during SSR / first paint. Gate the
  // icon behind a mount flag so it never renders a value that disagrees with
  // the theme next-themes applied to <html>.
  useEffect(() => setMounted(true), []);

  const isDark = colorMode === 'dark';

  return (
    <chakra.button
      type='button'
      onClick={toggleColorMode}
      aria-label='Toggle color theme'
      title='Toggle color theme'
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      boxSize='2.25rem'
      padding={0}
      fontSize='1.05rem'
      lineHeight='1'
      color='fg'
      bg='transparent'
      borderWidth='1px'
      borderColor='fg.muted'
      borderRadius='999px'
      cursor='pointer'
      transition='border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease'
      _hover={{ color: 'accent', borderColor: 'accent' }}
    >
      <span aria-hidden='true' suppressHydrationWarning>
        {mounted ? (isDark ? '☀' : '☾') : '☾'}
      </span>
    </chakra.button>
  );
}
