import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home'
  },
  '/projects': {
    name: 'projects'
  }
};

export default function Navbar() {
  return (
    <nav id='nav'>
      <div className='link-wrapper'>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link key={path} href={path}>
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
