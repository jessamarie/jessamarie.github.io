export interface GithubRepo {
  name: string;
  description: string | null;
  homepage: string | null;
  clone_url: string;
  topics: string[];
}

export default function GithubCard({ latestRepo }: { latestRepo: GithubRepo }) {
  const { name, description, homepage, clone_url } = latestRepo;

  return (
    <div className='project-card'>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className='project-links'>
        <a href={clone_url} target='_blank' rel='noreferrer'>
          Repository
        </a>
        {homepage ? (
          <a href={homepage} target='_blank' rel='noreferrer'>
            Website
          </a>
        ) : null}
      </div>
    </div>
  );
}
