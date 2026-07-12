'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

/**
 * Extracts the emotion styles rendered on the server (both scoped component
 * styles and global styles like Chakra's globalCss/token layer) and flushes
 * them into the initial HTML via useServerInsertedHTML. Without this, every
 * Chakra style would only attach on the client, causing a flash of unstyled
 * content — including on static exports. This is the canonical emotion
 * App Router registry, which distinguishes global styles (inserted with no
 * selector) from scoped ones.
 */
export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [registry] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    const prevInsert = cache.insert.bind(cache);
    let inserted: { name: string; isGlobal: boolean }[] = [];
    cache.insert = ((...args: Parameters<typeof prevInsert>) => {
      const selector = args[0];
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({ name: serialized.name, isGlobal: !selector });
      }
      return prevInsert(...args);
    }) as typeof cache.insert;
    const flush = () => {
      const prev = inserted;
      inserted = [];
      return prev;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const inserted = registry.flush();
    if (inserted.length === 0) return null;

    let styles = '';
    let dataEmotionAttribute = registry.cache.key;
    const globals: { name: string; style: string }[] = [];

    for (const { name, isGlobal } of inserted) {
      const style = registry.cache.inserted[name];
      if (typeof style === 'string') {
        if (isGlobal) {
          globals.push({ name, style });
        } else {
          styles += style;
          dataEmotionAttribute += ` ${name}`;
        }
      }
    }

    return (
      <>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${registry.cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
        {styles ? (
          <style
            data-emotion={dataEmotionAttribute}
            dangerouslySetInnerHTML={{ __html: styles }}
          />
        ) : null}
      </>
    );
  });

  return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}
