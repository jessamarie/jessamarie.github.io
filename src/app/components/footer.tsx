import { Box } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      as='footer'
      // Sticky-footer pattern: margin-top:auto pushes it to the viewport
      // bottom on short pages, below the content on long ones.
      marginTop='auto'
      maxWidth='content'
      marginX='auto'
      paddingTop='3rem'
      paddingBottom='2rem'
      color='fg.muted'
      fontSize='0.875rem'
    >
      Made with &hearts; and Next.js by Jessa &middot; {new Date().getFullYear()}
    </Box>
  );
}
