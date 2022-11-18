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
        "lg-h": ["48px", {lineHeight: "58px", fontWeight: 700}],
        "md-h": ["40px", {lineHeight: "45px", fontWeight: 700}],
        "sm-h": ["30px", {lineHeight: "38px", fontWeight: 700}],
        "xs-h": ["24px", {lineHeight: "38px", fontWeight: 700}],
        // Interfaces
        "sm-i": ["14px", {lineHeight: "24px"}],
        "md-i": ["16px", {lineHeight: "24px"}],
        "lg-i": ["20px", {lineHeight: "32px"}],
        // Paragraphs
        'md-p': ["18px", {lineHeight: "30px"}],
      },
      zIndex: {
        0: 0,
        1: 1,
      }
    },
  },
  plugins: [],
}
