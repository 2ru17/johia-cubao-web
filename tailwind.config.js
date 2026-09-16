export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: {
          light: '#F9FAFB',
          dark: '#0a0a0a',
          footer: '#050505',
        },
        brand: {
          yellow: '#FBB03B',
          'yellow-hover': '#E59D2F',
        },
        text: {
          dark: '#212529',
          light: '#F8F9FA',
        },
        overlay: {
          dark: 'rgba(0, 0, 0, 0.86)',
        },
      },
      borderRadius: {
        btn: '6px',
      },
      fontSize: {
        'fluid-h1': 'clamp(3rem, 6vw + 1rem, 5.5rem)',
        'fluid-h2': 'clamp(2.25rem, 4.5vw + 1rem, 4.5rem)',
        'fluid-h3': 'clamp(1.75rem, 3vw + 0.5rem, 3rem)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ripple: {
          '0%': { width: '0px', height: '0px', opacity: 0.5 },
          '100%': { width: '500px', height: '500px', opacity: 0 },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(251, 176, 59, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(251, 176, 59, 0.6)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 4s linear infinite',
        aurora: 'aurora 15s ease infinite',
        ripple: 'ripple 0.6s linear',
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      backgroundImage: {
        'texture-dark': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        'texture-light': "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.302-1.542.923-3.02 1.838-4.321l-1.025-1.025C20.672 15.932 19.345 17.653 18.232 20h2.952zm-3.328 0C15.688 17.062 12.392 15 8.5 15c-3.968 0-7.34 2.127-9.356 5.17l-1.025-1.025C.387 15.69 4.148 13.5 8.5 13.5c4.352 0 8.113 2.19 10.381 5.625l-1.025 1.025v-.15zM8.5 10C3.806 10 0 13.806 0 18.5c0 .354.022.7.065 1.042l1.01-1.01C1.025 18.358 1 18.18 1 18.5 1 14.358 4.358 11 8.5 11s7.5 3.358 7.5 7.5c0 .18-.025.358-.075.532l1.01 1.01A8.956 8.956 0 0017.5 18.5 9 9 0 008.5 9.5a9 9 0 00-9 9c0 .416.028.825.082 1.226l1.02-1.02C.543 18.423.5 18.165.5 17.9a8 8 0 018-8 8 8 0 018 8c0 .265-.043.523-.102.774l1.02 1.02C17.972 19.225 18 18.816 18 18.4a9 9 0 00-9-9 9 9 0 00-9 9c0 .148.006.295.017.442l1.02-1.02c-.015-.14-.037-.282-.037-.422a7.5 7.5 0 0115 0c0 .14-.022.282-.037.422l1.02 1.02c.011-.147.017-.294.017-.442A8.5 8.5 0 008.5 9a8.5 8.5 0 00-8.5 8.5c0 .316.018.627.052.935l1.02-1.02c-.035-.295-.072-.596-.072-.915a6.5 6.5 0 0113 0c0 .319-.037.62-.072.915l1.02 1.02c.034-.308.052-.619.052-.935A7 7 0 008.5 10zm-3 7a3 3 0 016 0c0 .126-.008.25-.023.372l1.01 1.01A4.01 4.01 0 0013.5 17a4 4 0 00-8 0c0 .185.012.367.036.545l1.01-1.01C6.008 17.25 6 17.126 6 17z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
