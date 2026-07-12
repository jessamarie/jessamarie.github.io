import Image from 'next/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CardShell, CardLink } from './card';
import { Badge } from './badge';
import type { Project } from '../projects/data';

export default function ProjectCard({ project }: { project: Project }) {
  const { name, description, technologies, repo, homepage, image } = project;

  return (
    <CardShell>
      <Box borderBottomWidth='1px' lineHeight={0}>
        <Image
          src={image}
          alt={`Screenshot of ${name}`}
          placeholder='blur'
          sizes='(max-width: 560px) 100vw, 21rem'
          style={{ width: '100%', height: 'auto', aspectRatio: '16 / 10', objectFit: 'cover', display: 'block' }}
        />
      </Box>
      <Flex direction='column' gap='0.6rem' flex='1' padding='0.9rem 1.1rem 1.1rem'>
        <Heading as='h2' textStyle='sectionTitle'>
          {name}
        </Heading>
        <Text color='fg.muted' fontSize='0.925rem' margin={0}>
          {description}
        </Text>
        {technologies.length > 0 && (
          <Flex as='ul' wrap='wrap' gap='0.5rem' padding={0} margin={0} listStyleType='none'>
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </Flex>
        )}
        <Flex gap='1rem' marginTop='auto' paddingTop='0.4rem'>
          <CardLink href={repo}>Repository</CardLink>
          {homepage && <CardLink href={homepage}>Website</CardLink>}
        </Flex>
      </Flex>
    </CardShell>
  );
}
