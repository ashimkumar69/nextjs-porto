const navMenuList = [
  { id: 1, title: "Home", path: "#home", submenu: [] },
  { id: 2, title: "About", path: "#about", submenu: [] },
  { id: 3, title: "Services", path: "#services", submenu: [] },
  { id: 4, title: "Projects", path: "#projects", submenu: [] },
  { id: 5, title: "Testimonials", path: "#testimonials", submenu: [] },
  { id: 6, title: "News", path: "#news", submenu: [] },
  { id: 7, title: "Contact", path: "#contact", submenu: [] },
  {
    id: 8,
    title: "Pages",
    path: "",
    submenu: [
      {
        id: 1,
        title: "Auth",
        path: "",
        submenu: [
          {
            id: 1,
            title: "Login",
            path: "/login",
            submenu: [],
          },

          { id: 2, title: "Register", path: "/register", submenu: [] },
          {
            id: 3,
            title: "Reset Password",
            path: "/reset-password",
            submenu: [],
          },
        ],
      },
      {
        id: 2,
        title: "Error Page",
        path: "",
        submenu: [
          { id: 1, title: "404 Page", path: "", submenu: [] },
          { id: 2, title: "500 Page", path: "", submenu: [] },
        ],
      },
      {
        id: 3,
        title: "Dashboard",
        path: "/dashboard",
        submenu: [],
      },
    ],
  },
  {
    id: 9,
    title: "More",
    path: "",
    submenu: [
      {
        id: 1,
        title: "Level 1",
        path: "",
        submenu: [
          {
            id: 1,
            title: "Level 2",
            path: "",
            submenu: [],
          },

          { id: 2, title: "Level 2", path: "", submenu: [] },
          {
            id: 3,
            title: "Level 2",
            path: "",
            submenu: [
              {
                id: 1,
                title: " Level 3",
                path: "",
                submenu: [],
              },
              { id: 2, title: " Level 3", path: "", submenu: [] },
              { id: 3, title: "Level 3", path: "", submenu: [] },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Level 1",
        path: "",
        submenu: [
          { id: 1, title: "Level 2", path: "", submenu: [] },
          { id: 2, title: "Level 2", path: "", submenu: [] },
        ],
      },
      {
        id: 3,
        title: "Level 1",
        path: "",
        submenu: [],
      },
    ],
  },
];

export function getNavMenuList() {
  return JSON.stringify(navMenuList);
}
