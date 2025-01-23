'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaCloudSun, FaCloudMoon } from 'react-icons/fa';
//import hamburger from '../../public/hamburger.json';
import home from '../../public/home.json';
import pencil from '../../public/pencil.json';
import postbox from '../../public/postbox.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (!theme) return null;

  const navItems = {
    '/': {
      name: 'Home',
      icon: home,
    },
    '/blog': {
      name: 'Blog',
      icon: pencil,
    },
    '/contact': {
      name: 'Contact',
      icon: postbox,
    },
  };

  return (
    <header className={`fixed top-0 left-0 w-full ${isMenuOpen ? 'bg-[var(--color1)]' : 'backdrop-blur-md'} shadow-md z-50`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-[var(--color4)]">
            My Portfolio
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center">
          {Object.entries(navItems).map(([path, { name, icon }]) => (
            <Link
              key={path}
              href={path}
              className="group hover:text-[var(--color3)] relative py-2 px-3 pl-8"
            >
              <span className="flex items-center float-right relative transition-all duration-300 ease-in-out group">
                <Lottie
                  animationData={icon}
                  loop={true}
                  className="h-6 mr-1 hidden transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:block"
                />
                <span className="py-1">{name}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--color3)] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </span>
            </Link>
          ))}

        </nav>

        {/* Theme Toggle Button */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="flex items-center px-4 py-2 rounded-lg cursor-pointer transition-all"
          >
            <span className="mr-2 text-sm font-medium text-[var(--color4)]">
              {theme === 'light' ? (
                <FaCloudSun className="text-[var(--color3)] mr-2" />
              ) : (
                <FaCloudMoon className="text-[var(--color3)] mr-2" />
              )}
            </span>

            <div
              className={`relative w-12 h-6 rounded-full bg-[var(--color2)] transition-all duration-300 ease-in-out`}
            >
              <div
                className={`absolute w-6 h-6 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-500'} rounded-full transition-all duration-300 ease-in-out ${theme === 'light' ? 'left-0' : 'left-6'
                  }`}
              ></div>
            </div>
          </button>
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
          >
            <div
              className={`w-4 h-1 bg-[var(--color4)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 absolute w-3' : ''
                }`}
              style={{ transformOrigin: 'top left' }}
            ></div>
            <div
              className={`w-4 h-1 bg-[var(--color4)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                }`}
            ></div>
            <div
              className={`w-4 h-1 bg-[var(--color4)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 absolute w-3' : ''
                }`}
              style={{ transformOrigin: 'bottom left' }}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-12 left-0 w-full bg-[var(--color1)] backdrop-blur-md md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-lg font-medium text-[var(--color4)] hover:text-[var(--color3)] transition-all duration-300"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <nav className="flex items-center space-x-6 justify-center">
          <button
            onClick={toggleTheme}
            className="flex items-center px-4 py-2 rounded-lg cursor-pointer transition-all"
          >
            <span className="mr-2 text-sm font-medium text-[var(--color4)]">
              {theme === 'light' ? (
                <FaCloudSun className="text-[var(--color3)] mr-2" />
              ) : (
                <FaCloudMoon className="text-[var(--color3)] mr-2" />
              )}
            </span>

            <div
              className={`relative w-12 h-6 rounded-full ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'}`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out ${theme === 'light' ? 'left-0' : 'left-6'
                  }`}
              ></div>
            </div>
          </button>
        </nav>
      </div>

    </header>
  );
}
