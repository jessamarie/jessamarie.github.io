import Image from 'next/image';
import type { Project } from '../projects/data';

export default function ProjectCard({ project }: { project: Project }) {
  const { name, description, technologies, repo, homepage, image } = project;

  return (
    <article className='project-card'>
      <Image
        className='project-thumb'
        src={image}
        alt={`Screenshot of ${name}`}
        placeholder='blur'
        sizes='(max-width: 560px) 100vw, 21rem'
      />
      <div className='project-body'>
        <h2>{name}</h2>
        <p>{description}</p>
        {technologies.length > 0 && (
          <ul className='badges'>
            {technologies.map((tech) => (
              <li className='badge' key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        )}
        <div className='project-links'>
          <a href={repo} target='_blank' rel='noreferrer'>
            Repository
          </a>
          {homepage && (
            <a href={homepage} target='_blank' rel='noreferrer'>
              Website
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
