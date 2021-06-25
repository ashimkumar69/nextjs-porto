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

// import
import clsx from "clsx";
import { useLoaded } from "../../hooks/loaded";
import Scrollspy from "react-scrollspy";

import { useRef } from "react";

const menuLists = [
  { id: 1, title: "Home", path: "home" },
  { id: 2, title: "About", path: "about" },
  { id: 3, title: "Services", path: "services" },
  { id: 4, title: "Projects", path: "projects" },
  { id: 5, title: "Testimonials", path: "testimonials" },
  { id: 6, title: "News", path: "news" },
  { id: 7, title: "Contact", path: "contact" },
  { id: 8, title: "Pages", path: "", dropdown: true },
];

const NavLinkItemButton = withStyles((theme) => ({
  root: {
    padding: "20px 15px",
    borderRadius: 0,
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: `2px solid ${theme.palette.common.white}`,
    },
  },
}))(Button);

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

  // dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDropdown = Boolean(anchorEl);
  const handleOpenDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdownClick = () => {
    setAnchorEl(null);
  };

  // manage navlink onclick
  const handleNavLinkOnClick = ({ event, path }) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${path}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
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
                    {menuLists.map((menuList) => (
                      <Box component="li" key={menuList.id}>
                        <NavLinkItemButton
                          component="a"
                          color="inherit"
                          onClick={(event) =>
                            menuList.dropdown
                              ? handleOpenDropdownClick(event)
                              : handleNavLinkOnClick({
                                  event,
                                  path: menuList.path,
                                })
                          }
                          aria-controls={menuList.dropdown && "fade-menu"}
                          aria-haspopup={menuList.dropdown && "true"}
                          className={clsx(classes.navLinkItem)}
                        >
                          {menuList.title}

                          {menuList.dropdown &&
                            (openDropdown ? <ExpandLess /> : <ExpandMore />)}
                        </NavLinkItemButton>
                      </Box>
                    ))}

                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={openDropdown}
                      onClose={handleCloseDropdownClick}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={handleCloseDropdownClick}>
                        Login
                      </MenuItem>
                      <MenuItem onClick={handleCloseDropdownClick}>
                        Register
                      </MenuItem>
                      <MenuItem onClick={handleCloseDropdownClick}>
                        Reset Password
                      </MenuItem>
                      <MenuItem onClick={handleCloseDropdownClick}>
                        404 Error Page
                      </MenuItem>
                    </Menu>
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
