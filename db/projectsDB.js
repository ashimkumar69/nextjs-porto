const projects = {
  sectionHeader: {
    subheading: "My complete project",
    heading: "My Latest Project",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! Error omnis deserunt quae, reprehenderit necessitatibus quibusdam molestias sed, voluptas vitae est! Velit, necessitatibus.",
  },
  projects: [
    {
      id: 1,
      image: "/images/projects/1.jpg",
      subtitle: "Photoshop",
      title: "Photoshop Design",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exdeleniti distinctio sit eum nesciunt dolor.",
      path: "/login",
    },
    {
      id: 2,
      image: "/images/projects/2.jpg",
      subtitle: "Photoshop",
      title: "Photoshop Design",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exdeleniti distinctio sit eum nesciunt dolor.",
      path: "/login",
    },
    {
      id: 3,
      image: "/images/projects/3.jpg",
      subtitle: "Photoshop",
      title: "Photoshop Design",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exdeleniti distinctio sit eum nesciunt dolor.",
      path: "/login",
    },
    {
      id: 4,
      image: "/images/projects/4.jpg",
      subtitle: "Photoshop",
      title: "Photoshop Design",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exdeleniti distinctio sit eum nesciunt dolor.",
      path: "/login",
    },
    {
      id: 5,
      image: "/images/projects/5.jpg",
      subtitle: "Photoshop",
      title: "Photoshop Design",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exdeleniti distinctio sit eum nesciunt dolor.",
      path: "/login",
    },
    {
      id: 6,
      image: "/images/projects/6.jpg",
      subtitle: "Photoshop",
      title: "Photoshop Design",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exdeleniti distinctio sit eum nesciunt dolor.",
      path: "/login",
    },
  ],
};

export function getProjects() {
  return JSON.stringify(projects);
}
