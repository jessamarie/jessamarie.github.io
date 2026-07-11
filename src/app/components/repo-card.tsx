export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className='project-card'>
      <div className='project-body'>
        <h2>{repo.name}</h2>
        {repo.description && <p>{repo.description}</p>}
        <div className='project-links'>
          <a href={repo.html_url} target='_blank' rel='noreferrer'>
            Repository
          </a>
        </div>
      </div>
    </article>
  );
}
