import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#ffffff",
        hot: "#ff2d8b",
        volt: "#ffe500",
        cyber: "#00e5ff",
        deep: "#7b2fff",
        mist: "#f5f0ff",
        lavender: "#c8a4ff",
        dora: "#1a8cff",
        forest: "#5aad6e",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "Arial Black", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        jp: ["var(--font-noto-jp)", "var(--font-inter)", "sans-serif"],
        kr: ["var(--font-noto-kr)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content:
          "min(1400px, calc(100vw - clamp(20px, 6vw, 56px)))",
      },
    },
  },
  plugins: [],
};

export default config;
