const services = {
  sectionHeader: {
    subheading: "What I can do for you",
    heading: "My Awesome Services",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! Error omnis deserunt quae, reprehenderit necessitatibus quibusdam molestias sed, voluptas vitae est! Velit, necessitatibus.",
  },
  services: [
    {
      id: 1,
      title: "Business Strategy",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! voluptas vitae est! Velit, necessitatibus.",
    },
    {
      id: 2,
      title: "Website Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! voluptas vitae est! Velit, necessitatibus.",
    },
    {
      id: 3,
      title: "Marketing &#38; Reporting",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! voluptas vitae est! Velit, necessitatibus.",
    },
    {
      id: 4,
      title: "Mobile App Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! voluptas vitae est! Velit, necessitatibus.",
    },
    {
      id: 5,
      title: "Graphics Designing",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! voluptas vitae est! Velit, necessitatibus.",
    },
    {
      id: 6,
      title: "Web designing",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptas aut facilis a voluptates ad praesentium corrupti pariatur! voluptas vitae est! Velit, necessitatibus.",
    },
  ],
};

export function getServices() {
  return JSON.stringify(services);
}
