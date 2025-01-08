import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "315px",
        sm: "400px",
        md: "768px",
        lg: "1200px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      borderWidth: {
        DEFAULT: "1px",
        "3": "3px",
      },
    },
  },
  plugins: [],
} satisfies Config;
