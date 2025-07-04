// This file configures Tailwind CSS to scan your React components for utility classes.
//
// NOTE: This file is separate from the React code but essential for the Tailwind setup.
/*
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      // You can define custom colors here if you want them as Tailwind variables
      colors: {
        'portfolio-primary': '#002D62',
        'portfolio-secondary': '#1E90FF',
        'portfolio-accent': '#87CEEB',
        'portfolio-text-dark': '#333333',
        'portfolio-text-light': '#ffffff',
        'portfolio-bg-light': '#f8f8f8',
        'portfolio-bg-dark': '#1a1a1a',
      }
    },
  },
  plugins: [],
}