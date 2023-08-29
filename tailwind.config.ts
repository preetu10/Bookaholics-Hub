import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       'bg_image' : "url('/image/background6.jpg')",
       'about_bg_image' : "url('/image/background7.jpg')",
      },

      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
      },
    },
  },
  plugins: [],
}
export default config
