'use client';
import { FaDownload } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

export default function Home() {
  const { theme } = useTheme();

  if (!theme) return null;

  return (
    <main className="flex flex-col items-center justify-between p-6 m-10 bg-[var(--color1)] dark:bg-[var(--color4)] text-[var(--color4)] dark:text-[var(--color1)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full min-h-screen">
        {/* Column 1 */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-2">
            <h1 className="text-6xl font-bold tracking-wide">
              SOFTWARE
            </h1>
            <h1 className="text-6xl font-bold tracking-wide text-[var(--color3)]">
              DEVELOPER
            </h1>
            <h1 className="text-xl font-medium text-neutral-500 dark:text-neutral-400">
              BS Computer Engineering Graduate
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="flex space-x-2 mt-6">
            <button className="bg-[var(--color3)] text-white hover:bg-teal-700 font-bold py-3 px-10 rounded-full shadow-md transition-all">
              <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Inquiry</span>
            </button>
            <button className="bg-[var(--color2)] hover:bg-[var(--color1)] font-bold py-3 px-5 rounded-full shadow-md flex items-center transition-all">
              <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Download CV</span>
              <FaDownload style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex items-center justify-center">
          {
            theme === 'dark' ? (
              <Image src="/sitting-dark.png" alt="Tech Image" width={600} height={600} layout="responsive" />
            ) : (
                <Image src="/sitting-light.png" alt="Tech Image" width={600} height={600} layout="responsive" />
            )
          }
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
          {
            theme === 'dark' ? (
              <Image src="/desk-dark.png" alt="Tech Image" width={600} height={600} layout="responsive" />
            ) : (
                <Image src="/desk-light.png" alt="Tech Image" width={600} height={600} layout="responsive" />
            )
          }
        </div>
      </div>
    </main>
  );
}
