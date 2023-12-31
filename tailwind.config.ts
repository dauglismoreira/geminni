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
        primary: '#382020',
        secondary: '#3C2222',
        light: '#987F6A',
        mediumLight: '#CEBCB0',
        ultralight: '#FAF8F7',
        wht: '#2A372F',
      },
      fontFamily: {
        novelinLight: ['Novelin Light', 'sans-serif'],
        novelinRegular: ['Novelin Regular', 'sans-serif'],
        novelinBold: ['Novelin Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
