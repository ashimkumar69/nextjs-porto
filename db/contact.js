const contact = {
  image: "/images/about/2.png",
  sectionHeader: {
    subheading: "Let's Say Hi",
    heading: "Hire Me",
    body: {
      phone: "+555 (0)99 6622 8787",
      email: "example@domain.com",
    },
  },
};

export function getContact() {
  return JSON.stringify(contact);
}
