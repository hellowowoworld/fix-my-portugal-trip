import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f6f1e8",
        ink: "#22211d",
        muted: "#6a665d",
        line: "#ddd2c0",
        forest: "#164b37",
        clay: "#b75638"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        line: "0 1px 0 rgba(34, 33, 29, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
