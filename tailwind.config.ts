import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", fg: "var(--fg)", card: "var(--card)", muted: "var(--muted)",
        line: "var(--line)", accent: "var(--accent)", "accent-fg": "var(--accent-fg)",
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    },
  },
};
export default config;
