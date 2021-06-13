// react
import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import { themeDarkAction, themeLightAction } from "../reduxStore/actions/index";

// nextjs
import Image from "next/image";
import { useRouter } from "next/router";

// material
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

// import
import colorToRGBA from "color-to-rgba";
import { useLoaded } from "../hooks/loaded";

const menuLists = [
  { id: 1, title: "Home", route: "home" },
  { id: 2, title: "About", route: "about" },
  { id: 3, title: "Services", route: "services" },
  { id: 4, title: "Projects", route: "projects" },
  { id: 5, title: "Testimonials", route: "testimonials" },
  { id: 6, title: "Blog", route: "blog" },
  { id: 7, title: "Contact", route: "contact" },
  { id: 8, title: "Pages", route: "", dropdown: true },
];

const useStyles = makeStyles((theme) => ({
  d_flex: {
    display: "flex",
  },
  justify_content_between: {
    justifyContent: "space-between",
  },
  cursor_pointer: {
    cursor: "pointer",
  },
  nav_item: {
    padding: "20px 15px",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: `2px solid ${theme.palette.common.white}`,
    },
    "&.active": {
      backgroundColor: colorToRGBA(theme.palette.common.black, 0.04),
      borderBottom: `2px solid ${theme.palette.common.white}`,
    },
  },
}));

function Nav() {
  // redux
  const dispatch = useDispatch();
  // style
  const classes = useStyles();
  // nextjs
  const router = useRouter();
  // const path = router.asPath.split("/#")[0];
  // const path1 = router.asPath.split("/#")[1];
  // console.log(path);
  // console.log(path1);
  // theme mode
  // import
  const loaded = useLoaded();

  const isThemeLight = useSelector((state) => state.theme.themeLight);

  const changeThemeHandler = () => {
    isThemeLight ? dispatch(themeDarkAction()) : dispatch(themeLightAction());
  };

  // dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDropdown = Boolean(anchorEl);
  const handleOpenDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdownClick = () => {
    setAnchorEl(null);
  };

  // nav link active
  const [activeNavLink, setActiveNavLink] = useState("home");

  // manage navlink onclick
  const handleNavLinkOnClick = ({ event, isDropdown, route }) => {
    setActiveNavLink(route);
    router.push(`/#${route}`);
    isDropdown ? handleOpenDropdownClick(event) : "";
  };

  return (
    <AppBar position="static" component="div">
      <Container maxWidth="lg">
        <Toolbar
          className={`${classes.justify_content_between}`}
          variant="dense"
          disableGutters
        >
          <Image
            className={classes.cursor_pointer}
            src="/images/logo/logo-01.png"
            alt="logo"
            width="160"
            height="30"
            onClick={() => router.push("/")}
          />

          <Box>
            <List
              className={`${classes.d_flex}`}
              disablePadding
              component="div"
            >
              {menuLists.map((menuList) => (
                <ListItem
                  key={menuList.id}
                  onClick={(event) =>
                    handleNavLinkOnClick({
                      event,
                      isDropdown: menuList.dropdown,
                      route: menuList.route,
                    })
                  }
                  aria-controls={menuList.dropdown && "fade-menu"}
                  aria-haspopup={menuList.dropdown && "true"}
                  button
                  className={`${classes.nav_item} ${
                    activeNavLink.toLocaleLowerCase() ===
                    menuList.title.toLocaleLowerCase()
                      ? "active"
                      : ""
                  } `}
                >
                  <ListItemText>{menuList.title}</ListItemText>

                  {menuList.dropdown &&
                    (openDropdown ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
              ))}

              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={openDropdown}
                onClose={handleCloseDropdownClick}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleCloseDropdownClick}>Login</MenuItem>
                <MenuItem onClick={handleCloseDropdownClick}>Register</MenuItem>
                <MenuItem onClick={handleCloseDropdownClick}>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleCloseDropdownClick}>
                  404 Error Page
                </MenuItem>
              </Menu>
            </List>
          </Box>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
