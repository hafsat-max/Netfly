/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        myAnimation: "myAnimation 2s ease-in-out infinite",
      },
      keyframes: {
        myAnimation: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50)" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        border: "1px solid #CECECE",
        circa: "1px solid #0FE3AF",
      },
      borderRadius: {
        arrow: "1.2rem",
        circa: "clamp(1.5rem,4vw,3.6rem)",
        icon: "1.25rem",
      },

      boxShadow: {
        custom: "11px 7px 0px 1px rgba(229,242,239,0.79)",
        hamburger: "2px 10px 52px -10px rgba(0,0,0,0.75)",
      },
      colors: {
        "cobalt-blue": "#0152A8",
        "eerie-black": "#1C1C1C",
        "green-blue": "#095FBA",
        "space-cadet": "#143450",
        "spring-green": "#0FE3AF",
        crayola: "#1baa83",
        btn: "#363636",
        darkblue: "#143450",
        light: "#F1F1F1",
        faint: "#545454",
      },

      fontFamily: {
        inter: "Inter",
        lato: "Lato",
        mont: "Montserrat",
      },

      fontSize: {
        14: "clamp(0.75rem, 1vw, 0.85rem)",
        16: "clamp(14px, 1.1vw, 16px)",
        18: "clamp(16px, 1vw, 18px)",
        20: "clamp(1.063rem,1.3vw,1.25rem)",
        30: "clamp(1.5rem,2vw,1.875rem)",
        50: "clamp(1.5rem,3.2vw,3.125rem)",
      },
      gap: {
        9: "0.554rem",
        contact: "clamp(4rem, 6vw,6.25rem)",
        list: "30px",
      },
      height: {
        arrow: "1.2rem",
        circa: "clamp(1.5rem,4vw,3.6rem)",

        icon: "1.25rem",
      },

      letterSpacing: {
        space: "0.415em",
      },

      lineHeight: {
        26: "clamp(0.938rem,2vw,1.625rem)",
      },
      padding: {
        18: "1.125rem",
        45: "clamp(1.25rem,3vw,2.8rem)",
        30: "clamp(0.938rem,2vw,1.875rem)",
        nav: "clamp(1.442rem, 3vw ,2.844rem)",
        btny: "1rem",
        btnx: "clamp( 1.5rem,2.5vw,2.313rem)",
        heroBtny: "clamp(0.5rem,1.1vw,1.063rem)",
        heroBtnx: "clamp(1.8rem, 3vw, 2.536rem)",
      },

      width: {
        arrow: "1.2rem",
        circa: "clamp(1.5rem,4vw,3.6rem)",
        icon: "1.25rem",
        lgAlignment: "62.6%",
        mdAlignment: "70%",
      },

      spacing: {
        305: "clamp(200px,19.1vw,305px)",
        310: "clamp(200px,20vw,315px)",
      },
    },
  },
  plugins: [],
};
