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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        soft: '#987F6A',
        primary: '#382020',
        secondary: '#3C2222',
        mediumLight: '#CEBCB0',
        regularLight: '#343E46',
        ultralight: '#FAF8F7',
        wht: '#2A372F',
      },
      fontFamily: {
        novelinLight: ['Novelin Light', 'sans-serif'],
        novelinRegular: ['Novelin Regular', 'sans-serif'],
        novelinBold: ['Novelin Bold', 'sans-serif'],
        novelinHeavy: ['Novelin Heavy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
