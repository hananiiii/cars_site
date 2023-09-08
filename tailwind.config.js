/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
         
          primary: 'hsl(219,69%,56%)',
          secondary: 'hsl(219,69%,52%)',
          title:'hsl(219,8%,75%)',
          text:'hsl(219,8%,95%)',
          body_color:'hsl(219,4%,4%)',
          
      },
  },
  },
  plugins: [],
}

