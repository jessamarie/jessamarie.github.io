import { Flex, Link } from '@chakra-ui/react';
import type { FlexProps, LinkProps } from '@chakra-ui/react';

/**
 * Shared card shell for ProjectCard and RepoCard. Reads the semantic tokens
 * defined in theme.ts, so colours flip with colour mode automatically. The
 * reduced-motion guard preserves the no-hop behaviour the old CSS provided.
 */
export function CardShell(props: FlexProps) {
  return (
    <Flex
      as='article'
      direction='column'
      overflow='hidden'
      bg='card.bg'
      borderWidth='1px'
      borderRadius='8px'
      transition='box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease'
      _hover={{ borderColor: 'accent', boxShadow: 'card', transform: 'translateY(-2px)' }}
      css={{ '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } } }}
      {...props}
    />
  );
}

export function CardLink(props: LinkProps) {
  return (
    <Link
      target='_blank'
      rel='noreferrer'
      color='accent'
      fontSize='0.9rem'
      paddingY='0.25rem'
      textDecoration='none'
      transition='opacity 0.2s ease'
      _hover={{ opacity: 0.7, textDecoration: 'none' }}
      {...props}
    />
  );
}
