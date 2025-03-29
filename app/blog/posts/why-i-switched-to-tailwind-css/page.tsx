"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import PostLayout from "../../../components/postLayout";

export default function Blog1() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const codeText1 = `<button class="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>`;
  const codeText2 = `<div class="text-md md:text-md lg:text-xl">Responsive Text</div>`;

  const handleCopy = async (
    text: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <PostLayout
      title={"Why I Switched to Tailwind CSS from Bootstrap"}
      content={BlogContents}
    />
  );

  function BlogContents() {
    return (
      <div className="space-y-8 blog-div">
        <p className="text-md text-[var(--color4)] leading-relaxed text-justify">
          As a developer, choosing the right CSS framework can make a huge
          difference in both the development process and the final product. For
          years, Bootstrap had been my go-to framework for building responsive
          and visually appealing websites. But recently, I made the switch to{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Tailwind CSS
          </a>
          —and here’s why.
        </p>

        <h2 className="text-3xl font-semibold text-[var(--color4)] mt-6">
          Advantages of Tailwind CSS
        </h2>

        <h3 className="text-2xl font-semibold text-[var(--color4)] mt-4">
          1. Utility-First Approach
        </h3>
        <p className="text-md text-[var(--color4)] leading-relaxed text-justify">
          Tailwind CSS focuses on utility classes rather than pre-defined
          components. This approach gives you complete control over styling
          without needing to override existing styles, which is a common issue
          in Bootstrap. Tailwind’s utility classes make it easier to design
          directly in your markup, speeding up the development process.
        </p>
        <div className="relative bg-[var(--color5)] text-gray-200 rounded-3xl p-6 mt-4">
          <button
            onClick={() => handleCopy(codeText1, setCopied1)}
            className={`absolute top-2 right-2 px-3 py-1 rounded text-md transition ${
              copied1 ? "text-gray-400" : "text-white"
            }`}
            data-tip={copied1 ? "Copied!" : "Click to copy"}
          >
            {copied1 ? "Copied!" : <FiCopy />}
          </button>
          <pre className="overflow-auto py-2">
            <code className="font-mono text-md">{codeText1}</code>
          </pre>
        </div>

        <h3 className="text-2xl font-semibold text-[var(--color4)] mt-6">
          2. Customization and Design Freedom
        </h3>
        <p className="text-md text-[var(--color4)] leading-relaxed text-justify">
          With Tailwind, you’re not bound to predefined UI components. You can
          customize every element to your exact needs using the configuration
          file, ensuring your site doesn’t look like every other Bootstrap-based
          project.
        </p>

        <h3 className="text-2xl font-semibold text-[var(--color4)] mt-6">
          3. Responsive Design Made Simple
        </h3>
        <p className="text-md text-[var(--color4)] leading-relaxed text-justify">
          Tailwind’s built-in responsive utilities are intuitive and allow you
          to easily adjust styles based on breakpoints. For example:
        </p>
        <div className="relative bg-[var(--color5)] text-gray-200 rounded-3xl p-6 mt-4">
          <button
            onClick={() => handleCopy(codeText2, setCopied2)}
            className={`absolute top-2 right-2 px-3 py-1 rounded text-md transition ${
              copied2 ? "text-gray-400" : "text-white"
            }`}
            data-tip={copied2 ? "Copied!" : "Click to copy"}
          >
            {copied2 ? "Copied!" : <FiCopy />}
          </button>
          <pre className="overflow-auto py-2">
            <code className="font-mono text-md">{codeText2}</code>
          </pre>
        </div>
      </div>
    );
  }
}
