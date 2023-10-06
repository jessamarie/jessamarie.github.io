export default function GithubCard({ latestRepo }: any) {
  const { name, description, homepage, clone_url, topics } = latestRepo;

  return (
    <div className='project-card'>
      <h1>{name}</h1>
      <p>{description}</p>
      <div className='project-links'>
        <a href={clone_url} target='_blank'>
          Repository
        </a>
        {homepage ? (
          <a href={homepage} target='_blank'>
            Website
          </a>
        ) : null}
      </div>
    </div>
  );
}
