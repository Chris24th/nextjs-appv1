"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import PostLayout from "../../../components/postLayout";

export default function Blog1() {
    const [copied1, setCopied1] = useState(false);
    const [copied2, setCopied2] = useState(false);

    const codeText1 = `<button class="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>`;
    const codeText2 = `<div class="text-sm md:text-lg lg:text-xl">Responsive Text</div>`;

    const handleCopy = async (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 seconds
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return <PostLayout title={"test"} content={BlogContents} />;

    function BlogContents() {
        return (
            <div>
                <h1>Why I Switched to Tailwind CSS from Bootstrap</h1>
                <p>
                    As a developer, choosing the right CSS framework can make a huge difference in both the development process and the final product. For years, Bootstrap had been my go-to framework for building responsive and visually appealing websites. But recently, I made the switch to{" "}
                    <a href="https://tailwindcss.com/" target="_blank" className="text-blue-500 underline">
                        Tailwind CSS
                    </a>
                    —and here’s why.
                </p>

                <h2>Advantages of Tailwind CSS</h2>

                <h3>1. Utility-First Approach</h3>
                <p>
                    Tailwind CSS focuses on utility classes rather than pre-defined components. This approach gives you complete control over styling without needing to override existing styles, which is a common issue in Bootstrap. Tailwind’s utility classes make it easier to design directly in your markup, speeding up the development process.
                </p>
                <div className="relative bg-gray-900 text-gray-200 rounded-lg p-4 overflow-auto">
                    <button
                        onClick={() => handleCopy(codeText1, setCopied1)}
                        className={`absolute top-2 right-2 px-3 py-1 rounded text-sm transition ${copied1 ? "text-gray-400" : "text-white"
                            }`}
                        data-tip={copied1 ? "Copied!" : "Click to copy"}
                    >
                        {copied1 ? "Copied!" : <FiCopy />}
                    </button>
                    <pre>
                        <code className="font-mono text-sm">{codeText1}</code>
                    </pre>
                </div>

                <h3>2. Customization and Design Freedom</h3>
                <p>
                    With Tailwind, you’re not bound to predefined UI components. You can customize every element to your exact needs using the configuration file, ensuring your site doesn’t look like every other Bootstrap-based project.
                </p>

                <h3>3. Responsive Design Made Simple</h3>
                <p>
                    Tailwind’s built-in responsive utilities are intuitive and allow you to easily adjust styles based on breakpoints. For example:
                </p>
                <div className="relative bg-gray-900 text-gray-200 rounded-lg p-4 overflow-auto">
                    <button
                        onClick={() => handleCopy(codeText2, setCopied2)}
                        className={`absolute top-2 right-2 px-3 py-1 rounded text-sm transition ${copied2 ? "text-gray-400" : "text-white"
                            }`}
                        data-tip={copied2 ? "Copied!" : "Click to copy"}
                    >
                        {copied2 ? "Copied!" : <FiCopy />}
                    </button>
                    <pre>
                        <code className="font-mono text-sm">{codeText2}</code>
                    </pre>
                </div>
                {/* Additional sections can remain unchanged */}
            </div>
        );
    }
}
