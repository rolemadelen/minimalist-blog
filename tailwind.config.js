/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'iphone': '375px',
      // => @media (min-width: 375px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'dt1024': '1024px',
      // => @media (min-width: 1024px) { ... }

      'dt1440': '1440px',
      // => @media (min-width: 1440px) { ... }

      'dt1920': '1920px',
      // => @media (min-width: 1920px) { ... }
    }
  },
  plugins: [require("daisyui")],
}
