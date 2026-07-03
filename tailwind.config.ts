import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f8f2",
          100: "#e9efe1",
          200: "#d7e0ca",
          300: "#becdac",
          400: "#A3B18A",
          500: "#87996f",
          600: "#6d7d59",
          700: "#566247",
          800: "#3f4835",
          900: "#2c3325",
        },
        forest: {
          50: "#eef4ef",
          100: "#d8e4db",
          200: "#b1c9b8",
          300: "#87ab91",
          400: "#5d8c69",
          500: "#436f52",
          600: "#35593f",
          700: "#294531",
          800: "#1c3023",
          900: "#102016",
        },
        ink: "#2B2B2B",
        paper: "#F7F5F0",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(16, 32, 22, 0.14)",
        glass: "0 8px 32px rgba(16, 32, 22, 0.12)",
      },
      backgroundImage: {
        "sage-radial":
          "radial-gradient(circle at top left, rgba(163,177,138,0.24), transparent 34%), radial-gradient(circle at top right, rgba(67,111,82,0.15), transparent 32%), linear-gradient(180deg, #FBFAF6 0%, #F4F1EA 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        rise: "rise 0.8s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
