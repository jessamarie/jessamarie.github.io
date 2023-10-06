'use client';
import { useEffect, useState } from 'react';
import GithubCard from '../components/github-card';

export default function Projects() {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch(
        `https://api.github.com/search/repositories?q=user:jessamarie+sort:author-date-asc`
      );

      const projects = await data.json();

      // projects.total_count

      setProjects(projects.items);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <p>A portfolio of my Github projects</p>
      <div className='projects-container'>
        {projects.length
          ? projects.map((latestRepo: any, idx: number) => (
              <GithubCard latestRepo={latestRepo} key={idx} />
            ))
          : 'No repositories to show'}
      </div>
    </div>
  );
}
