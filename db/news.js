const news = {
  sectionHeader: {
    subheading: "Latest News",
    heading: "News",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! Error omnis deserunt quae, reprehenderit necessitatibus quibusdam molestias sed, voluptas vitae est! Velit, necessitatibus.",
  },
  news: [
    {
      id: 1,
      headeravatar: "/images/testimonials/1.jpg",
      headertitle: "Shrimp and Chorizo Paella",
      headersubtitle: "CEO Math Private Ltd.",
      image: "/images/news/1.jpg",
      date: "2 oct 2021",
      title: "This impressive paella is a  party",
      body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      path: "/login",
    },
    {
      id: 2,
      headeravatar: "/images/testimonials/1.jpg",
      headertitle: "Shrimp and Chorizo Paella",
      headersubtitle: "CEO Math Private Ltd.",
      image: "/images/news/2.jpg",
      date: "2 oct 2021",
      title: "This impressive paella is a  party",
      body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      path: "/login",
    },
    {
      id: 3,
      headeravatar: "/images/testimonials/1.jpg",
      headertitle: "Shrimp and Chorizo Paella",
      headersubtitle: "CEO Math Private Ltd.",
      image: "/images/news/3.jpg",
      date: "2 oct 2021",
      title: "This impressive paella is a  party",
      body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      path: "/login",
    },
  ],
};

export function getNews() {
  return JSON.stringify(news);
}
