"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";
import home from "../../public/home.json";
import pencil from "../../public/pencil.json";
import postbox from "../../public/postbox.json";
import dynamic from "next/dynamic";

interface NavItem {
  name: string;
  icon: object;
  dropdown?: {
    [key: string]: {
      subName: string;
    };
  };
}

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (!theme) return null;

  const navItems: { [key: string]: NavItem } = {
    "/": {
      name: "Home",
      icon: home,
      dropdown: {
        experience: {
          subName: "Experience",
        },
        skills: {
          subName: "Skills",
        },
        projects: {
          subName: "Projects",
        },
      },
    },
    "/blog": {
      name: "Blog",
      icon: pencil,
    },
    "/contact": {
      name: "Contact",
      icon: postbox,
    },
  };

  // const handleScroll = (
  //   id: string,
  //   e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  // ) => {
  //   // Prevent default behavior of the link
  //   e.preventDefault();

  //   // Navigate to the homepage first
  //   window.location.href = `/?home=${id}`;

  //   // Wait for the homepage to load, then scroll to the section
  // };

  const renderNavItem = ([path, { name, icon, dropdown }]: [
    string,
    NavItem
  ]) => (
    <div
      key={path}
      className="relative group flex flex-col items-center relative"
    >
      <Link
        href={path}
        className="group hover:text-[var(--color3)] relative py-2 px-3 pl-8"
      >
        <span className="flex items-center float-right relative transition-all duration-300 ease-in-out group">
          <Lottie
            animationData={icon}
            loop={true}
            className="bg-[var(--color3)] rounded-xl p-1 h-6 mr-1 hidden transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:block"
          />
          <span className="py-1">{name}</span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--color3)] group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </span>
      </Link>
      {dropdown && (
        <div className="absolute top-full ml-16 px-3 py-3 shadow-sm rounded-md hidden group-hover:flex flex-col bg-[var(--color1)] opacity-90">
          {Object.entries(dropdown).map(([subPath, { subName }]) => (
            <Link
              key={subPath}
              className="flex py-1 px-4 text-xs hover:text-[var(--color3)]"
              href={`/#${subPath}`}
              passHref
            >
              {subName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[var(--color4)]">
              Chris24th
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center">
            {Object.entries(navItems).map(renderNavItem)}
          </nav>

          {/* Theme Toggle Button */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="flex items-center px-4 py-2 rounded-lg cursor-pointer transition-all"
            >
              <span className="mr-2 text-sm font-medium text-[var(--color4)]">
                {theme === "light" ? (
                  <FaCloudSun className="text-[var(--color3)] mr-2" />
                ) : (
                  <FaCloudMoon className="text-[var(--color3)] mr-2" />
                )}
              </span>

              <div
                className={`relative w-8 h-4 rounded-full bg-[var(--color3)] transition-all duration-300 ease-in-out`}
              >
                <div
                  className={`absolute w-4 h-4 rounded-full transition-all duration-300 ease-in-out bg-[var(--color3)] filter brightness-75  
                ${theme === "light" ? "left-0" : "left-4"}`}
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
                className={`w-4 h-0.5 bg-[var(--color4)] transition-all duration-300 ${
                  isMenuOpen ? "hamburger1" : ""
                }`}
                style={{ transformOrigin: "top left" }}
              ></div>
              <div
                className={`w-3.5 h-0.5 bg-[var(--color4)] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-4 h-0.5 bg-[var(--color4)] transition-all duration-300 ${
                  isMenuOpen ? "hamburger2" : ""
                }`}
                style={{ transformOrigin: "bottom left" }}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={` backdrop-blur md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {/* Navigation Items */}
          <nav className="flex flex-col items-center space-y-1 backdrop-blur">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
              <Link
                key={path}
                href={path}
                className="group hover:text-[var(--color3)] relative py-1 px-3 pl-8"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center float-right relative ">
                  <Lottie
                    animationData={icon}
                    loop={true}
                    className="bg-[var(--color3)] rounded-xl p-1 h-6 mr-2 hidden transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:block"
                  />
                  <span className="py-1">{name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--color3)] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <nav className="flex items-center space-x-6 justify-center">
            <button
              onClick={toggleTheme}
              className="flex items-center px-4 py-2 mb-2 rounded-lg cursor-pointer transition-all"
            >
              <span className="mr-2 text-sm font-medium text-[var(--color4)]">
                {theme === "light" ? (
                  <FaCloudSun className="text-[var(--color3)] mr-2" />
                ) : (
                  <FaCloudMoon className="text-[var(--color3)] mr-2" />
                )}
              </span>

              <div
                className={`relative w-8 h-4 rounded-full bg-[var(--color3)] transition-all duration-300 ease-in-out`}
              >
                <div
                  className={`absolute w-4 h-4 rounded-full transition-all duration-300 ease-in-out bg-[var(--color3)] filter brightness-75  
                ${theme === "light" ? "left-0" : "left-4"}`}
                ></div>
              </div>
            </button>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <span
          className={`${
            isMenuOpen
              ? "fixed h-screen bg-[var(--color1)] opacity-20 w-full"
              : "hidden"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></span>
      )}
    </div>
  );
}
