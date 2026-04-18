'use client';
import { useEffect, useState } from 'react';
import GithubCard, { GithubRepo } from '../components/github-card';

export default function Projects() {
  const [projects, setProjects] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch(
        `https://api.github.com/search/repositories?q=user:jessamarie+sort:author-date-asc`
      );
      const json = await data.json();
      setProjects(json.items);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <p>A portfolio of my Github projects</p>
      <div className='projects-container'>
        {loading ? (
          <p className='loading'>Loading projects...</p>
        ) : projects.length ? (
          projects.map((latestRepo) => (
            <GithubCard latestRepo={latestRepo} key={latestRepo.name} />
          ))
        ) : (
          'No repositories to show'
        )}
      </div>
    </div>
  );
}
