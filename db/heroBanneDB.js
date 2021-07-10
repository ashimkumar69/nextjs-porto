const heroBanner = [
  {
    id: 1,
    image: "/images/heroBanner/1.jpg",
    subheading: "Web World pixel designer",
    heading: "Hello, I’m Designer. Welcome to my World.",
    path: "/login",
  },
  {
    id: 2,
    image: "/images/heroBanner/1.jpg",
    subheading: "Web World pixel designer",
    heading: "Hello, I’m Designer. Welcome to my World.",
    path: "/login",
  },
  {
    id: 3,
    image: "/images/heroBanner/1.jpg",
    subheading: "Web World pixel designer",
    heading: "Hello, I’m Designer. Welcome to my World.",
    path: "/login",
  },
];

export function getHeroBanner() {
  return JSON.stringify(heroBanner);
}
