/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'size-1': '2.25rem',
        'size-2': '2.5rem',
        'size-3': '2rem',
        'size-4': '1.5rem',
        'size-5': '1.25rem',
        'size-6': '1rem',
        'size-7': '0.9375rem',
        'size-8': '0.8125rem' 
      },
      backgroundColor: {
        'primary': '#24AFB5'
      },
      textColor: {
        'primary': '#1C1C1C', 
        'secondary': '#585757',
        'tertiary': '#969696',
        'blue': '#24AFB5'
      },
      borderColor: {
        'primary': '#24AFB5'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%'
      }

    },
  },
  plugins: [],
}

