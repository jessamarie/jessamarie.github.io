const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'HTML & CSS',
  'Ruby on Rails',
  'Git',
];

export default function Home() {
  return (
    <main>
      <section className='section'>
        <h1>Hi, I&apos;m Jessa 👋</h1>
        <p className='lead'>
          I&apos;m a full stack developer. I build web applications with JavaScript,
          TypeScript, React, and Next.js, and I&apos;m passionate about solving
          complex problems and writing{' '}
          <span className='hero-highlight'>beautiful code</span>.
        </p>
        <div className='social-links'>
          <a
            className='social-link'
            target='_blank'
            rel='noreferrer'
            href='https://docs.google.com/document/d/1vYktTZyz8bN_rlO52Wiklb_ktUTCECoCdm6XBASwRUQ/preview'
          >
            Resume
          </a>
          <a
            className='social-link'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/jessicamariebarre/'
          >
            LinkedIn
          </a>
          <a
            className='social-link'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/jessamarie'
          >
            Github
          </a>
        </div>
      </section>

      <section className='section'>
        <h2>About</h2>
        <p>
          I enjoy working across the stack, from designing intuitive interfaces
          to shaping the data and logic behind them. I&apos;m happiest turning a
          fuzzy problem into something people can actually use.
        </p>
      </section>

      <section className='section'>
        <h2>Skills</h2>
        <ul className='badges'>
          {skills.map((skill) => (
            <li className='badge' key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
