const about = {
  image: "/images/about/1.png",
  sectionHeader: {
    subheading: "My About Details",
    heading: "About Me",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! Error omnis deserunt quae, reprehenderit necessitatibus quibusdam molestias sed, voluptas vitae est! Velit, necessitatibus.",
  },
  tab: {
    skills: [
      { id: 1, primaryTitle: "HTML", basevalue: 90 },
      { id: 2, primaryTitle: "CSS", basevalue: 85 },
      { id: 3, primaryTitle: "JS", basevalue: 80 },
      { id: 4, primaryTitle: "REACTJS", basevalue: 75 },
    ],
    experiences: [
      {
        id: 1,
        title: "Sr. Front-end Developer",
        subtitle: "- Google",
        body: "2020 - Current",
      },
      {
        id: 2,
        title: "Front-end Developer",
        subtitle: "- Microsoft",
        body: "2018 - 2020",
      },
      {
        id: 3,
        title: "Front-end Developer",
        subtitle: "- Amazon",
        body: "2017 - 2018",
      },
    ],
    education: [
      {
        id: 1,
        title: "Backend-end Developer",
        subtitle: "- 327 1st St, Liverpool, NY 13088, United States",
        body: "2016",
      },
      {
        id: 2,
        title: "Front-end Developer",
        subtitle: "- 327 1st St, Liverpool, NY 13088, United States",
        body: "2015",
      },
      {
        id: 3,
        title: "Graphic Designer",
        subtitle: "- 327 1st St, Liverpool, NY 13088, United States",
        body: "2014",
      },
    ],
  },
};

export function getAbout() {
  return JSON.stringify(about);
}
