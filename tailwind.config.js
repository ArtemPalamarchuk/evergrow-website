module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#068576",
        "dark": '#2A4547',
        "secondary": '#F1805F',
        "light-green": '#E6F0ED'
      },
      fontFamily: {
        ["urbanist-m"]: "Urbanist-500",
        ["urbanist-sb"]: "Urbanist-600",
        ["urbanist-b"]: "Urbanist-700",
      },
      fontSize: {
        // Headings
        "lg-h": ["48px", {lineHeight: "58px"}],
        "md-h": ["40px", {lineHeight: "45px"}],
        "sm-h": ["30px", {lineHeight: "32px"}],
        "xs-h": ["24px", {lineHeight: "38px"}],
        // tablet
        "md-h-tab": ["40px", {lineHeight: "48px"}],
        "sm-h-tab": ["30px", {lineHeight: "45px"}],
        "xs-h-tab": ["18px", {lineHeight: "24px"}],
        // mobile
        "sm-h-mob": ["26px", {lineHeight: "28px"}],
        "xs-h-mob": ["14px", {lineHeight: "18px"}],

        // Interfaces
        "lg-i": ["20px", {lineHeight: "32px"}],
        "md-i": ["16px", {lineHeight: "24px"}],
        "sm-i": ["14px", {lineHeight: "24px"}],
        // Paragraphs
        'md-p': ["18px", {lineHeight: "30px"}],
      },
      zIndex: {
        0: 0,
        1: 1,
      },
      gridTemplateColumns: {
        'auto-columns': 'repeat(auto, minmax(3, 1fr))',
      }
    },
    screens: {
      'sm': '640px', // tablet
      'md': '1024px', // laptop
      'lg': '1280px', // desktop
    }
  },
  plugins: [],
}
