import React from "react";

// nextjs
import { useRouter } from "next/router";
// material
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuList from "@material-ui/core/MenuList";

// import
import Scrollspy from "react-scrollspy";

const menuList = [
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

const useStyles = makeStyles((theme) => ({
  menuList: {
    display: "flex",
    listStyle: "none",
    margin: 0,

    "& > .is-current": {
      "& > $menuLinkButton": {
        borderBottom: `2px solid ${theme.palette.common.white}`,
      },
    },
  },
  menuLinkButton: {
    padding: theme.spacing(2.5, 2),
    borderRadius: 0,
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: `2px solid ${theme.palette.common.white}`,
    },
  },

  dropdownMenuItem: {
    padding: 0,
    width: theme.spacing(19),
  },
  dropdownMenuItemButton: {
    borderRadius: "unset",
  },
}));

function AppMenu() {
  // style
  const classes = useStyles();

  // nextjs
  const router = useRouter();

  // dropdown menu Level1
  const [anchorElLevel1, setAnchorElLevel1] = React.useState(null);
  const [selectedIndexLevel1, setSelectedIndexLevel1] = React.useState(null);
  const openDropdownLevel1 = Boolean(anchorElLevel1);
  const handleOpenDropdownClickLevel1 = (event, index, submenu, path) => {
    setSelectedIndexLevel1(index);
    submenu.length > 0 ? setAnchorElLevel1(event.currentTarget) : "";
    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };
  const handleCloseDropdownClickLevel1 = () => {
    setAnchorElLevel1(null);
  };

  // dropdown menu Level2
  const [anchorElLevel2, setAnchorElLevel2] = React.useState(null);
  const [selectedIndexLevel2, setSelectedIndexLevel2] = React.useState(null);
  const openDropdownLevel2 = Boolean(anchorElLevel2);
  const handleOpenDropdownClickLevel2 = (event, index, submenu, path) => {
    setSelectedIndexLevel2(index);
    submenu.length > 0 ? setAnchorElLevel2(event.currentTarget) : "";
    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };
  const handleCloseDropdownClickLevel2 = () => {
    setAnchorElLevel2(null);
  };

  // dropdown menu Level3
  const [anchorElLevel3, setAnchorElLevel3] = React.useState(null);
  const [selectedIndexLevel3, setSelectedIndexLevel3] = React.useState(null);
  const openDropdownLevel3 = Boolean(anchorElLevel3);
  const handleOpenDropdownClickLevel3 = (event, index, submenu, path) => {
    setSelectedIndexLevel3(index);
    submenu.length > 0 ? setAnchorElLevel3(event.currentTarget) : "";
    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };
  const handleCloseDropdownClickLevel3 = () => {
    setAnchorElLevel3(null);
  };

  // dropdown menu Level4
  const [selectedIndexLevel4, setSelectedIndexLevel4] = React.useState(null);
  const handleOpenDropdownClickLevel4 = (event, index, path) => {
    setSelectedIndexLevel4(index);

    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };

  // manage scroll navlink onclick
  const handleNavLinkOnClick = (event, path) => {
    if (path.includes("#")) {
      const anchor = (event.target.ownerDocument || document).querySelector(
        `${path}`
      );

      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(path);
    }
  };

  return (
    <React.Fragment>
      <Scrollspy
        items={[
          "home",
          "about",
          "services",
          "projects",
          "testimonials",
          "news",
          "contact",
        ]}
        currentClassName="is-current"
        componentTag="ul"
        className={classes.menuList}
        offset={-10}
      >
        {menuList.map((item, index) => (
          <Box component="li" key={item.id}>
            <Button
              className={classes.menuLinkButton}
              component="a"
              color="inherit"
              onClick={(event) =>
                handleOpenDropdownClickLevel1(
                  event,
                  index,
                  item.submenu,
                  item.path
                )
              }
              aria-controls={item.submenu.length > 0 ? "fade-menu" : ""}
              aria-haspopup={item.submenu.length > 0 ? "true" : "false"}
              endIcon={
                item.submenu.length > 0 ? (
                  index === selectedIndexLevel1 && openDropdownLevel1 ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : (
                  <React.Fragment>{""}</React.Fragment>
                )
              }
            >
              {item.title}
            </Button>

            {/* level1 menu */}
            {item.submenu.length > 0 && index === selectedIndexLevel1 && (
              <React.Fragment>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorElLevel1}
                  keepMounted
                  open={openDropdownLevel1}
                  onClose={handleCloseDropdownClickLevel1}
                  TransitionComponent={Fade}
                >
                  <MenuList>
                    {item.submenu.map((item, index) => (
                      <MenuItem
                        key={item.id}
                        className={classes.dropdownMenuItem}
                        disableGutters
                        selected={index === selectedIndexLevel2}
                      >
                        <Button
                          className={classes.dropdownMenuItemButton}
                          size="large"
                          fullWidth
                          component="a"
                          color="inherit"
                          onClick={(event) =>
                            handleOpenDropdownClickLevel2(
                              event,
                              index,
                              item.submenu,
                              item.path
                            )
                          }
                          aria-controls={
                            item.submenu.length > 0 ? "fade-menu-2" : ""
                          }
                          aria-haspopup={
                            item.submenu.length > 0 ? "true" : "false"
                          }
                          endIcon={
                            item.submenu.length > 0 ? (
                              index === selectedIndexLevel2 &&
                              openDropdownLevel2 ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )
                            ) : (
                              <React.Fragment>{""}</React.Fragment>
                            )
                          }
                        >
                          {item.title}
                        </Button>
                        {/* Level2 menu */}
                        {item.submenu.length > 0 &&
                          index === selectedIndexLevel2 && (
                            <React.Fragment>
                              <Menu
                                id="fade-menu-2"
                                anchorEl={anchorElLevel2}
                                keepMounted
                                open={openDropdownLevel2}
                                onClose={handleCloseDropdownClickLevel2}
                                TransitionComponent={Fade}
                              >
                                <MenuList>
                                  {item.submenu.map((item, index) => (
                                    <MenuItem
                                      key={item.id}
                                      className={classes.dropdownMenuItem}
                                      disableGutters
                                      selected={index === selectedIndexLevel3}
                                    >
                                      <Button
                                        className={
                                          classes.dropdownMenuItemButton
                                        }
                                        size="large"
                                        fullWidth
                                        component="a"
                                        color="inherit"
                                        onClick={(event) =>
                                          handleOpenDropdownClickLevel3(
                                            event,
                                            index,
                                            item.submenu,
                                            item.path
                                          )
                                        }
                                        aria-controls={
                                          item.submenu.length > 0
                                            ? "fade-menu-3"
                                            : ""
                                        }
                                        aria-haspopup={
                                          item.submenu.length > 0
                                            ? "true"
                                            : "false"
                                        }
                                        endIcon={
                                          item.submenu.length > 0 ? (
                                            index === selectedIndexLevel3 &&
                                            openDropdownLevel3 ? (
                                              <ExpandLess />
                                            ) : (
                                              <ExpandMore />
                                            )
                                          ) : (
                                            <React.Fragment>
                                              {""}
                                            </React.Fragment>
                                          )
                                        }
                                      >
                                        {item.title}
                                      </Button>
                                      {/* level3 menu */}
                                      {item.submenu.length > 0 &&
                                        index === selectedIndexLevel3 && (
                                          <React.Fragment>
                                            <Menu
                                              id="fade-menu-3"
                                              anchorEl={anchorElLevel3}
                                              keepMounted
                                              open={openDropdownLevel3}
                                              onClose={
                                                handleCloseDropdownClickLevel3
                                              }
                                              TransitionComponent={Fade}
                                            >
                                              <MenuList>
                                                {item.submenu.map(
                                                  (item, index) => (
                                                    <MenuItem
                                                      key={item.id}
                                                      className={
                                                        classes.dropdownMenuItem
                                                      }
                                                      disableGutters
                                                      selected={
                                                        index ===
                                                        selectedIndexLevel4
                                                      }
                                                    >
                                                      <Button
                                                        className={
                                                          classes.dropdownMenuItemButton
                                                        }
                                                        size="large"
                                                        fullWidth
                                                        component="a"
                                                        color="inherit"
                                                        onClick={(event) =>
                                                          handleOpenDropdownClickLevel4(
                                                            event,
                                                            index,
                                                            item.path
                                                          )
                                                        }
                                                      >
                                                        {item.title}
                                                      </Button>
                                                    </MenuItem>
                                                  )
                                                )}
                                              </MenuList>
                                            </Menu>
                                          </React.Fragment>
                                        )}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              </Menu>
                            </React.Fragment>
                          )}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </React.Fragment>
            )}
          </Box>
        ))}
      </Scrollspy>
    </React.Fragment>
  );
}

export default AppMenu;
