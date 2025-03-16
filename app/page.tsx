"use client";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import rocket from "../public/rocket.json";
import dynamic from "next/dynamic";
import Experience from "./home/Experience";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const { theme } = useTheme();
  const [isInqHovered, setIsInqHovered] = useState(false);

  useEffect(() => {
    const subPath = window.location.pathname.split("/").pop();
    if (subPath) {
      const targetSection = document.getElementById(subPath);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    console.log(subPath);
  }, []);

  if (!theme) return null;

  return (
    <main className="flex flex-col items-center justify-between p-6 m-10 bg-[var(--color1)] dark:bg-[var(--color4)] text-[var(--color4)] dark:text-[var(--color1)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full min-h-screen">
        {/* Column 1 */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-2">
            <h1 className="text-6xl font-bold tracking-wide">SOFTWARE</h1>
            <h1 className="text-6xl font-bold tracking-wide text-[var(--color3)]">
              DEVELOPER
            </h1>
            <h1 className="text-xl font-medium text-neutral-500 dark:text-neutral-400">
              BS Computer Engineering Graduate
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="flex space-x-2 mt-6">
            <a
              href="https://www.linkedin.com/in/christopher-espenida-8402462a9/ 
            // "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onMouseEnter={() => setIsInqHovered(true)}
                onMouseLeave={() => setIsInqHovered(false)}
                className="bg-[var(--color3)] text-white font-bold py-3 px-10 rounded-full shadow-md flex items-center transition-all"
              >
                <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                  Inquiry
                </span>
                <Lottie
                  animationData={rocket}
                  loop={isInqHovered}
                  className="ml-1 w-6 h-6"
                />
              </button>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex items-center justify-center">
          {theme === "dark" ? (
            <Image
              src="/sitting-dark.png"
              alt="Tech Image"
              width={600}
              height={600}
              layout="responsive"
            />
          ) : (
            <Image
              src="/sitting-light.png"
              alt="Tech Image"
              width={600}
              height={600}
              layout="responsive"
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full min-h-screen">
        <div className="flex flex-col align-left justify-center">
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-bold tracking-wide text-[var(--color3)]">
              ABOUT ME
            </h1>
            <h1 className="text-lg font-medium">
              BS Computer Engineering Graduate
            </h1>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex items-center justify-center">
          {theme === "dark" ? (
            <Image
              src="/desk-dark.png"
              alt="Tech Image"
              width={600}
              height={600}
              layout="responsive"
            />
          ) : (
            <Image
              src="/desk-light.png"
              alt="Tech Image"
              width={600}
              height={600}
              layout="responsive"
            />
          )}
        </div>
      </div>

      {/* Experience Section */}
      <Experience />
      <section
        id="skills"
        className="flex items-center justify-between w-full p-6 rounded-md shadow-md mt-10"
      >
        <h2 className="text-3xl font-bold">Skills</h2>
        <p>Coming soon.</p>
        <Lottie
          animationData={rocket}
          loop={true}
          className="bg-[var(--color3)] rounded-full ml-1 w-20 h-20 p-3"
        />
      </section>
      <section
        id="projects"
        className="flex items-center justify-between w-full p-6 rounded-md shadow-md mt-10"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <p>Coming soon.</p>
        <Lottie
          animationData={rocket}
          loop={true}
          className="bg-[var(--color3)] rounded-full ml-1 w-20 h-20 p-3"
        />
      </section>
    </main>
  );
}
