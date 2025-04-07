import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Spotify color palette
        "spotify-green": "#1DB954",
        "spotify-green-bright": "#1ED760",
        "spotify-black": "#191414",
        "spotify-dark": "#121212",
        "spotify-dark-elevated": "#181818",
        "spotify-dark-highlight": "#282828",
        "spotify-light-gray": "#B3B3B3",
        "spotify-white": "#FFFFFF",

        // Additional UI colors from Spotify
        "spotify-blue": "#0D72EA",
        "spotify-purple": "#7358FF",
        "spotify-orange": "#E8115B",
        "spotify-pink": "#EB1E32",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "spotify-gradient": "linear-gradient(135deg, #1DB954 0%, #191414 100%)",
      },
      fontFamily: {
        sans: ["Inter", "Gotham", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
