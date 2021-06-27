// react
import React, { Fragment, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import {
  themeDarkAction,
  themeLightAction,
  onScrollBannerTopHeightAction,
} from "../../reduxStore/actions/index";

// nextjs
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// material
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import
import clsx from "clsx";
import { useLoaded } from "../../hooks/loaded";
import Scrollspy from "react-scrollspy";

import { useRef } from "react";

const menuLists = [
  { id: 1, title: "Home", path: "#home", submenu: [] },
  { id: 2, title: "About", path: "#about", submenu: [] },
  { id: 3, title: "Services", path: "#services", submenu: [] },
  { id: 4, title: "Projects", path: "#projects", submenu: [] },
  { id: 5, title: "Testimonials", path: "#testimonials", submenu: [] },
  { id: 6, title: "News", path: "#news", submenu: [] },
  { id: 7, title: "Contact", path: "#contact", submenu: [] },
  {
    id: 8,
    title: "Pages 1",
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
        title: "Settings",
        path: "/login",
        submenu: [],
      },
    ],
  },
  {
    id: 9,
    title: "Pages 2",
    path: "",
    submenu: [
      {
        id: 1,
        title: "index 1",
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
        title: "index 2",
        path: "",
        submenu: [
          { id: 1, title: "404 Page", path: "", submenu: [] },
          { id: 2, title: "500 Page", path: "", submenu: [] },
        ],
      },
      {
        id: 3,
        title: "index 3",
        path: "",
        submenu: [],
      },
    ],
  },
];

const LogoButton = withStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  text: {
    padding: 0,
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  navLinkButton: {
    padding: "20px 15px",
    borderRadius: 0,
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: `2px solid ${theme.palette.common.white}`,
    },
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,

    "& > .is-current": {
      "& > .MuiButton-root": {
        borderBottom: `2px solid ${theme.palette.common.white}`,
      },
    },
  },
}));

function Nav(props) {
  // redux
  const dispatch = useDispatch();
  // style
  const classes = useStyles();
  // nextjs
  const router = useRouter();

  // load component cliend site
  const loaded = useLoaded();
  // theme color
  const isThemeLight = useSelector((state) => state.theme.themeLight);
  const changeThemeHandler = () => {
    isThemeLight ? dispatch(themeDarkAction()) : dispatch(themeLightAction());
  };

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
  // const [anchorElLevel3, setAnchorElLevel3] = React.useState(null);
  // const [selectedIndexLevel3, setSelectedIndexLevel3] = React.useState(null);
  // const openDropdownLevel3 = Boolean(anchorElLevel3);
  // const handleOpenDropdownClickLevel3 = (event, index, submenu, path) => {
  //   setSelectedIndexLevel3(index);
  //   submenu.length > 0 ? setAnchorElLevel3(event.currentTarget) : "";
  //   if (path.trim() !== "" && path.trim().length !== 0) {
  //     handleNavLinkOnClick(event, path);
  //   }
  // };
  // const handleCloseDropdownClickLevel3 = () => {
  //   setAnchorElLevel3(null);
  // };

  // manage navlink onclick
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

  // get appbar height
  const getElementHeightRef = useRef();
  useEffect(() => {
    dispatch(
      onScrollBannerTopHeightAction(getElementHeightRef.current.offsetHeight)
    );
  }, []);

  return (
    <Fragment>
      <AppBar position="fixed" component="div" ref={getElementHeightRef}>
        <Container maxWidth="lg">
          <Toolbar variant="dense" disableGutters>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Link href="/">
                  <LogoButton component="a" disableRipple>
                    <Image
                      src="/images/logo/logo-01.png"
                      alt="logo"
                      width={160}
                      height={30}
                    />
                  </LogoButton>
                </Link>
              </Grid>
              <Grid item>
                <Box>
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
                    className={classes.navList}
                    offset={-10}
                  >
                    {menuLists.map((item, index) => (
                      <Box component="li" key={item.id}>
                        <Button
                          className={clsx(classes.navLinkButton)}
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
                          aria-controls={
                            item.submenu.length > 0 ? "fade-menu" : ""
                          }
                          aria-haspopup={
                            item.submenu.length > 0 ? "true" : "false"
                          }
                        >
                          {item.title}

                          {item.submenu.length > 0 ? (
                            index === selectedIndexLevel1 &&
                            openDropdownLevel1 ? (
                              <ExpandLess />
                            ) : (
                              <ExpandMore />
                            )
                          ) : (
                            <React.Fragment>{""}</React.Fragment>
                          )}
                        </Button>
                        {item.submenu.length > 0 &&
                          index === selectedIndexLevel1 && (
                            <React.Fragment>
                              <Menu
                                id="fade-menu"
                                anchorEl={anchorElLevel1}
                                keepMounted
                                open={openDropdownLevel1}
                                onClose={handleCloseDropdownClickLevel1}
                                TransitionComponent={Fade}
                              >
                                {item.submenu.map((item, index) => (
                                  <MenuItem key={item.id}>
                                    <Button
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
                                        item.submenu.length > 0
                                          ? "fade-menu-2"
                                          : ""
                                      }
                                      aria-haspopup={
                                        item.submenu.length > 0
                                          ? "true"
                                          : "false"
                                      }
                                    >
                                      {item.title}

                                      {item.submenu.length > 0 ? (
                                        index === selectedIndexLevel2 &&
                                        openDropdownLevel2 ? (
                                          <ExpandLess />
                                        ) : (
                                          <ExpandMore />
                                        )
                                      ) : (
                                        <React.Fragment>{""}</React.Fragment>
                                      )}
                                    </Button>
                                    {item.submenu.length > 0 &&
                                      index === selectedIndexLevel2 && (
                                        <React.Fragment>
                                          <Menu
                                            id="fade-menu-2"
                                            anchorEl={anchorElLevel2}
                                            keepMounted
                                            open={openDropdownLevel2}
                                            onClose={
                                              handleCloseDropdownClickLevel2
                                            }
                                            TransitionComponent={Fade}
                                          >
                                            {item.submenu.map((item, index) => (
                                              <MenuItem
                                                key={item.id}
                                                onClick={
                                                  handleCloseDropdownClickLevel2
                                                }
                                              >
                                                {item.title}
                                              </MenuItem>
                                            ))}
                                          </Menu>
                                        </React.Fragment>
                                      )}
                                  </MenuItem>
                                ))}
                              </Menu>
                            </React.Fragment>
                          )}
                      </Box>
                    ))}
                  </Scrollspy>
                </Box>
              </Grid>
              <Grid item>
                <Box>
                  <Button color="inherit" onClick={() => router.push("/login")}>
                    Login
                  </Button>

                  <IconButton
                    aria-label="change theme color"
                    color="inherit"
                    onClick={changeThemeHandler}
                  >
                    {loaded && isThemeLight ? (
                      <Brightness6Icon />
                    ) : (
                      <BrightnessHighIcon />
                    )}
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}

export default Nav;
