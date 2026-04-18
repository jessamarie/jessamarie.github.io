'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': { name: 'home' },
  '/projects': { name: 'projects' },
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav id='nav'>
      <div className='link-wrapper'>
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className={(pathname.replace(/\/$/, '') || '/') === path ? 'active' : ''}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
