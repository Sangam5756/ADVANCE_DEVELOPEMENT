import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{tsx,mdx}",
    "./components/**/*.{tsx,mdx}",
    "./app/**/*.{tsx,mdx}",
     "../../packages/ui/**/*.{tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
