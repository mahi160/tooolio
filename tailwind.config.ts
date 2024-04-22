import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  prefix: "-",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.blue,
        accent: colors.fuchsia,
        success: colors.green,
        warn: colors.red,
      },
    },
  },
  plugins: [],
};
export default config;
