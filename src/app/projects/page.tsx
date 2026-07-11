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
      <section className='section'>
        <h1>Projects</h1>
        <p className='lead'>A selection of things I&apos;ve built.</p>
      </section>
      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
        {repos.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </div>
    </main>
  );
}
