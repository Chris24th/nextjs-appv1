import { CommonBGText } from "@/utils/utils"



function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className="mb-16 mx-12">
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-[var(--color4)] md:flex-row md:space-x-4 md:space-y-0">
                <li>
                    <a
                        className="flex items-center transition-all hover:text-[var(--color3)] "
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/christopher-espenida-8402462a9/"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">linkedin</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-[var(--color3)] "
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.github.com/chris24th"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">github</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-[var(--color3)] "
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/chris24th"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">facebook</p>
                    </a>
                </li>
            </ul>
            <p className="mt-8 text-neutral-600 dark:text-neutral-300">
                © Christopher Espenida {new Date().getFullYear()}. All Rights Reserved.
            </p>
        </footer>
    )
}