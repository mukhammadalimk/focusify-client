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
        sm: "360px",
        break_400: "400px",
        break_500: "500px",
        break_600: "600px",
        break_700: "700px",
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
