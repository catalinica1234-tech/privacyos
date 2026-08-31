import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        privacy: {
          void: "#070A0F",
          surface: "#0D1118",
          surface2: "#121923",
          surface3: "#17202C",
          cyan: "#19D3C5",
          blue: "#5B7CFF",
          violet: "#8B5CF6",
        },
        risk: {
          low: "#22C55E",
          medium: "#EAB308",
          high: "#F97316",
          critical: "#EF4444",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(25,211,197,0.12)",
        card: "0 20px 60px rgba(0,0,0,0.18)",
      },
      backgroundImage: {
        "privacy-grid": "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "privacy-radial": "radial-gradient(circle at 50% 0%, rgba(25,211,197,0.12), transparent 42%)",
      },
    },
  },
  plugins: [],
};

export default config;
