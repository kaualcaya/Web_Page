import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      backgroundImage: {
        'img_bg_hero':'url(./assets/Background.png)',
      },
    extend: {
      colors:{
        'Primary-black':'#010101',
      'gray-dark':'#0A0A0A',
      'gray-dark-two':'#2B2B2B',
      'gray-white-text':'#ffffff',
      'gray-midium-text':'#5F5F5F',
      'gray-light-text':'#CDCDCD',
      'opacity-gray':'rgba(100, 80, 57, 0.1)'
      }
    },
  },
  plugins: [],
}
export default config
