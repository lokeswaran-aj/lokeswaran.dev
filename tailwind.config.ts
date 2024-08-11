import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#121212",
        primary: "#0a85ff",
        secondary: "#0000f0",
        accent: "#f2617b",
        "red-light": "#f7a1b1",
      },
    },
  },
  plugins: [],
}
export default config
