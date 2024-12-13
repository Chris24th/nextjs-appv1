'use client';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';
import { CommonHover } from '@/utils/utils';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/contact': {
    name: 'Contact',
  },
};

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  if (!theme) return null;

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-[var(--color4)]">
            MyLogo
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex items-center space-x-6">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="group transition-all duration-100 hover:text-[var(--color3)] relative py-2 px-3"
            >
              <span className="relative transition-all duration-300 ease-in-out">
                {name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--color3)] group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <nav className="flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[var(--color1)]"
          >
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
