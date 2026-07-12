import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import ProjectCard from '../components/project-card';
import RepoCard from '../components/repo-card';
import { projects } from './data';
import { filterRepos, type GithubRepo } from './filter';
import type { Repo } from '../components/repo-card';

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/jessamarie/repos?per_page=100&sort=pushed',
      { headers: { Accept: 'application/vnd.github+json' } }
    );
    if (!res.ok) return [];
    const data: GithubRepo[] = await res.json();
    return filterRepos(data, projects.map((p) => p.name));
  } catch {
    return [];
  }
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <main>
      <Box as='section' marginBottom='3rem'>
        <Heading as='h1' textStyle='pageTitle'>
          Projects
        </Heading>
        <Text color='fg.muted' fontSize='1.05rem' marginBottom={0}>
          A selection of things I&apos;ve built.
        </Text>
      </Box>
      <Grid
        gap='1.25rem'
        gridTemplateColumns='repeat(2, 1fr)'
        css={{ '@media (max-width: 560px)': { gridTemplateColumns: '1fr' } }}
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
        {repos.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </Grid>
    </main>
  );
}
