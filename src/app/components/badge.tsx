import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

/**
 * Small pill used for skills (home page) and technologies (project cards).
 * Defaults to a list item since both callers render it inside a <ul>.
 */
export function Badge(props: BoxProps) {
  return (
    <Box
      as='li'
      fontSize='0.8rem'
      paddingX='0.6rem'
      paddingY='0.25rem'
      borderRadius='999px'
      bg='badge.bg'
      color='badge.fg'
      whiteSpace='nowrap'
      {...props}
    />
  );
}
