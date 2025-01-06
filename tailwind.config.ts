import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--color1)",
        foreground: "var(--color2)",
        highlight: "var(--color3)",
        text: "var(--color4)",
        codeBg: "var(--color5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
