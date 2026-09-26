/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12121F',
        ink2: '#1B1B2E',
        paper: '#FBF7F0',
        coral: '#FF6F91',
        coral2: '#FF9AB0',
        mint: '#8FE3C1',
        gold: '#E8B95C',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-14px) rotate(var(--r, 0deg))' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        driftSlow: 'drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
