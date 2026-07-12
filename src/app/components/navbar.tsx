'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Flex, Link } from '@chakra-ui/react';
import ThemeToggle from './theme-toggle';

const navItems = {
  '/': { name: 'home' },
  '/projects': { name: 'projects' },
};

export default function Navbar() {
  const pathname = usePathname();
  const current = pathname.replace(/\/$/, '') || '/';

  return (
    <Flex as='nav' align='center' justify='space-between' marginBottom='3.5rem'>
      <Flex gap='0.25rem'>
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            asChild
            variant='plain'
            aria-current={current === path ? 'page' : undefined}
            paddingX='0.5rem'
            paddingY='0.25rem'
            marginLeft='-8px'
            color='fg.muted'
            transition='color 0.2s ease'
            _hover={{ color: 'fg', textDecoration: 'none' }}
            _currentPage={{ color: 'accent', fontWeight: '600' }}
          >
            <NextLink href={path}>{name}</NextLink>
          </Link>
        ))}
      </Flex>
      <ThemeToggle />
    </Flex>
  );
}
