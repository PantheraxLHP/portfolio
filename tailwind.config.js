module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfdf5',
          100: '#d4f7e9',
          200: '#aeecd7',
          300: '#77dbc0',
          400: '#3ec2a4',
          500: '#1da885',
          600: '#10886b',
          700: '#116c57',
          800: '#115647',
          900: '#11463c',
          950: '#07271f',
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0d1117',
          900: '#030712',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
