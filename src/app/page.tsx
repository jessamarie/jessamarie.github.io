import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { Badge } from './components/badge';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'HTML & CSS',
  'Ruby on Rails',
  'Git',
];

const socialLinks = [
  {
    label: 'Resume',
    href: 'https://docs.google.com/document/d/1vYktTZyz8bN_rlO52Wiklb_ktUTCECoCdm6XBASwRUQ/preview',
  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jessicamariebarre/' },
  { label: 'Github', href: 'https://github.com/jessamarie' },
];

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noreferrer'
      variant='plain'
      position='relative'
      color='fg'
      paddingY='2px'
      borderBottomWidth='1px'
      borderColor='accent'
      transition='color 0.2s ease'
      _hover={{ color: 'accent', textDecoration: 'none', _before: { width: '100%' } }}
      _before={{
        content: '""',
        position: 'absolute',
        bottom: '-1px',
        left: 0,
        width: 0,
        height: '2px',
        bg: 'accent',
        transition: 'width 0.3s ease-in-out',
      }}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <Box as='section' marginBottom='3rem'>
        <Heading as='h1' textStyle='pageTitle'>
          Hi, I&apos;m Jessa 👋
        </Heading>
        <Text color='fg.muted' fontSize='1.05rem' marginBottom='1rem'>
          I&apos;m a full stack developer. I build web applications with JavaScript,
          TypeScript, React, and Next.js, and I&apos;m passionate about solving
          complex problems and writing{' '}
          <Text as='span' color='accent' fontWeight='500'>
            beautiful code
          </Text>
          .
        </Text>
        <Flex wrap='wrap' gap='1.25rem'>
          {socialLinks.map(({ label, href }) => (
            <SocialLink key={label} href={href}>
              {label}
            </SocialLink>
          ))}
        </Flex>
      </Box>

      <Box as='section' marginBottom='3rem'>
        <Heading as='h2' textStyle='sectionTitle'>
          About
        </Heading>
        <Text marginBottom={0}>
          I enjoy working across the stack, from designing intuitive interfaces
          to shaping the data and logic behind them. I&apos;m happiest turning a
          fuzzy problem into something people can actually use.
        </Text>
      </Box>

      <Box as='section' marginBottom='3rem'>
        <Heading as='h2' textStyle='sectionTitle'>
          Skills
        </Heading>
        <Flex as='ul' wrap='wrap' gap='0.5rem' padding={0} margin={0} listStyleType='none'>
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </Flex>
      </Box>
    </main>
  );
}
