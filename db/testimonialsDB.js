const testimonials = {
  sectionHeader: {
    subheading: "Top Testimonials",
    heading: "Testimonials",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! Error omnis deserunt quae, reprehenderit necessitatibus quibusdam molestias sed, voluptas vitae est! Velit, necessitatibus.",
  },
  testimonials: [
    {
      id: 1,
      headeravatar: "/images/testimonials/1.jpg",
      headertitle: "Shrimp and Chorizo Paella",
      headersubtitle: "September 14, 2016",
      body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      rating: 3,
    },
    {
      id: 2,
      headeravatar: "/images/testimonials/1.jpg",
      headertitle: "Shrimp and Chorizo Paella",
      headersubtitle: "September 14, 2016",
      body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      rating: 4.5,
    },
    {
      id: 3,
      headeravatar: "/images/testimonials/1.jpg",
      headertitle: "Shrimp and Chorizo Paella",
      headersubtitle: "September 14, 2016",
      body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      rating: 5,
    },
    {
      id: 4,
      headeravatar: "/images/testimonials/1.jpg",
      headertitle: "Shrimp and Chorizo Paella",
      headersubtitle: "September 14, 2016",
      body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      rating: 4,
    },
  ],
};

export function getTestimonials() {
  return JSON.stringify(testimonials);
}
