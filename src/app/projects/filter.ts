import type { Repo } from '../components/repo-card';

export type GithubRepo = Repo & { fork: boolean };

/**
 * Keep only repos worth listing under the curated projects:
 * drop forks, and drop anything already featured (matched by name,
 * case-insensitively).
 */
export function filterRepos(repos: GithubRepo[], featuredNames: string[]): Repo[] {
  const featured = new Set(featuredNames.map((n) => n.toLowerCase()));
  return repos.filter((r) => !r.fork && !featured.has(r.name.toLowerCase()));
}
