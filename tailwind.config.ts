import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#2F2A2A",
          secondary: "#615476",
          muted: "#AAAAAA",
        },
        accent: {
          DEFAULT: "#7B2FBE",
        },
        surface: {
          DEFAULT: "#FAF6EE",
          card: "#F2EDE4",
        },
        border: "#E5E5E5",
      },
    },
  },
  plugins: [],
};

export default config;
