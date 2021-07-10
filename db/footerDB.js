const footer = {
  footerLogo: "/images/logo/footer-logo-01.png",
  footerBrand: {
    name: "Porto",
    path: "/login",
  },
  icons: [
    { id: 1, name: "facebook", path: "https://www.facebook.com/" },
    { id: 2, name: "twitter", path: "https://twitter.com/" },
    { id: 3, name: "youtube", path: "https://www.youtube.com" },
    { id: 4, name: "pinterest", path: "https://www.pinterest.com/" },
    { id: 5, name: "github", path: "https://github.com/" },
  ],
};

export function getFooter() {
  return JSON.stringify(footer);
}
