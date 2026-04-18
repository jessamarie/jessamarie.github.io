'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    const prevInsert = cache.insert.bind(cache);
    let inserted: string[] = [];
    cache.insert = (...args: Parameters<typeof prevInsert>) => {
      const result = prevInsert(...args);
      const name = args[1]?.name;
      if (name && cache.inserted[name] === undefined) {
        inserted.push(name);
      }
      return result;
    };
    return { cache, flush: () => { const out = inserted; inserted = []; return out; } };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    const styles = names.map((name) => cache.inserted[name]).join('');
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
