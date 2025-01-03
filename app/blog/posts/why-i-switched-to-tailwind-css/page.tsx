"use client";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import PostLayout from '../../../components/postLayout';

export default function Blog1() {
    const [copied1, setCopied1] = useState(false);
    const [copied2, setCopied2] = useState(false);

    const codeText1 = `<button class="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>`;
    const codeText2 = `<div class="text-sm md:text-lg lg:text-xl">Responsive Text</div>`;

    return (
        <PostLayout title={"test"} content={BlogContents} />
    );


    function BlogContents() {
        return (
            <div>
                <h1>Why I Switched to Tailwind CSS from Bootstrap</h1>
                <p>
                    As a developer, choosing the right CSS framework can make a huge difference in both the development process and the final product. For years, Bootstrap had been my go-to framework for building responsive and visually appealing websites. But recently, I made the switch to
                    <a href="https://tailwindcss.com/" target="_blank" className="text-blue-500 underline">Tailwind CSS</a>—and here’s why.
                </p>

                <h2>Advantages of Tailwind CSS</h2>

                <h3>1. Utility-First Approach</h3>
                <p>
                    Tailwind CSS focuses on utility classes rather than pre-defined components. This approach gives you complete control over styling without needing to override existing styles, which is a common issue in Bootstrap. Tailwind’s utility classes make it easier to design directly in your markup, speeding up the development process.
                </p>
                <div className="relative bg-gray-900 text-gray-200 rounded-lg p-4 overflow-auto">
                    <CopyToClipboard text={codeText1} onCopy={() => { setCopied1(true); setCopied2(false); }}>
                        <button
                            className={`absolute top-2 right-2 px-3 py-1 rounded text-sm text-white hover:text-[var(--color3)] transition ${copied1 ? 'text-gray-800' : 'text-gray-500'}`}
                            data-tip={copied1 ? 'Copied!' : 'Click to copy'}
                        >
                            <FiCopy />
                        </button>
                    </CopyToClipboard>
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
                    <CopyToClipboard text={codeText2} onCopy={() => { setCopied2(true); setCopied1(false); }}>
                        <button
                            className={`absolute top-2 right-2 px-3 py-1 rounded text-sm text-white hover:text-[var(--color3)] transition ${copied2 ? 'text-gray-800' : 'text-gray-500'}`}
                            data-tip={copied2 ? 'Copied!' : 'Click to copy'}
                        >
                            <FiCopy />
                        </button>
                    </CopyToClipboard>
                    <pre>
                        <code className="font-mono text-sm">{codeText2}</code>
                    </pre>
                </div>
                <h3>4. Lightweight CSS Output</h3>
                <p>
                    Tailwind’s <code>purge</code> feature ensures that only the CSS classes you use make it to production. This results in smaller CSS files and faster page loads, unlike Bootstrap, which includes an extensive library of unused classes.
                </p>

                <h3>5. Community and Ecosystem</h3>
                <p>
                    The Tailwind ecosystem is rapidly growing, with tools like Tailwind UI, Headless UI, and integrations for frameworks like React and Next.js. This makes it an excellent choice for modern web development.
                </p>

                <h2>Disadvantages of Bootstrap</h2>

                <h3>1. Opinionated Components</h3>
                <p>
                    Bootstrap’s pre-styled components are convenient but often lead to websites that look very similar unless heavily customized. Overriding these styles can be cumbersome and time-consuming.
                </p>

                <h3>2. Less Granular Control</h3>
                <p>
                    While Bootstrap provides utility classes, they don’t offer the same level of granularity as Tailwind. You often need to write custom CSS for detailed styling, which defeats the purpose of using a framework.
                </p>

                <h3>3. Larger CSS File Sizes</h3>
                <p>
                    Bootstrap includes a wide range of styles and components, many of which might go unused in your project. This results in a larger CSS file, potentially slowing down your website.
                </p>

                <h3>4. Customizing Themes is Complicated</h3>
                <p>
                    To customize Bootstrap, you need to dive into its Sass files or override styles. This process is more complex compared to Tailwind’s easy-to-use configuration file.
                </p>

                <h3>5. Component Dependency</h3>
                <p>
                    Bootstrap encourages a component-based approach, which can sometimes feel restrictive. For example, using one component might require you to include additional dependencies, such as JavaScript plugins, even if you don’t need them.
                </p>

                <h2>Why Tailwind Was the Right Choice for Me</h2>
                <p>
                    Switching to Tailwind CSS has transformed how I approach web design. Its flexibility, speed, and efficiency align perfectly with my development workflow. While Bootstrap remains a solid framework for beginners and quick prototypes, Tailwind excels in projects where customization and performance are key.
                </p>
                <p>
                    If you’re considering making the switch, I recommend giving Tailwind a try. It may feel different at first, but the control and freedom it offers are well worth the learning curve.
                </p>

                <p>
                    <strong>What about you?</strong> Have you tried Tailwind CSS or stuck with Bootstrap? I’d love to hear your thoughts in the comments below!
                </p>
            </div>
        )
    }
}
