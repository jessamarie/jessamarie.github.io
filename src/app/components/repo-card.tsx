import { Flex, Heading, Text } from '@chakra-ui/react';
import { CardShell, CardLink } from './card';

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <CardShell>
      <Flex direction='column' gap='0.6rem' flex='1' padding='0.9rem 1.1rem 1.1rem'>
        <Heading as='h2' textStyle='sectionTitle'>
          {repo.name}
        </Heading>
        {repo.description && (
          <Text color='fg.muted' fontSize='0.925rem' margin={0}>
            {repo.description}
          </Text>
        )}
        <Flex gap='1rem' marginTop='auto' paddingTop='0.4rem'>
          <CardLink href={repo.html_url}>Repository</CardLink>
        </Flex>
      </Flex>
    </CardShell>
  );
}
