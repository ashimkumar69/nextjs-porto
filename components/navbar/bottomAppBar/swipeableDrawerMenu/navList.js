import React from "react";
// next
import { useRouter } from "next/router";
//material
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// import
import Rgba from "color-to-rgba";

const listItems = [
  { id: 1, title: "Home", path: "#home", submenu: [] },
  { id: 2, title: "About", path: "#about", submenu: [] },
  { id: 3, title: "Services", path: "#services", submenu: [] },
  { id: 4, title: "Projects", path: "#projects", submenu: [] },
  {
    id: 5,
    title: "Testimonials",
    path: "#testimonials",
    submenu: [],
  },
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
        title: "Settings",
        path: "",
        submenu: [],
      },
    ],
  },
  {
    id: 9,
    title: "Mors",
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
  root: {
    width: "100%",
    maxWidth: "350px",
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavList(props) {
  const classes = useStyles();
  const router = useRouter();

  //    selected  list level 1
  const [selectedIndexLevel1, setSelectedIndexLevel1] = React.useState("");
  const handlerListItemClickLevel1 = (event, index, path) => {
    let isSelected = selectedIndexLevel1 === index ? "" : index;
    setSelectedIndexLevel1(isSelected);
    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };

  //    selected  list level 2
  const [selectedIndexLevel2, setSelectedIndexLevel2] = React.useState("");
  const handlerListItemClickLevel2 = (event, index, path) => {
    let isSelected = selectedIndexLevel2 === index ? "" : index;
    setSelectedIndexLevel2(isSelected);
    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };

  //    selected  list level 3
  const [selectedIndexLevel3, setSelectedIndexLevel3] = React.useState("");
  const handlerListItemClickLevel3 = (event, index, path) => {
    let isSelected = selectedIndexLevel3 === index ? "" : index;
    setSelectedIndexLevel3(isSelected);
    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };

  //    selected  list level 4
  const [selectedIndexLevel4, setSelectedIndexLevel4] = React.useState("");
  const handlerListItemClickLevel4 = (event, index, path) => {
    let isSelected = selectedIndexLevel4 === index ? "" : index;
    setSelectedIndexLevel4(isSelected);
    if (path.trim() !== "" && path.trim().length !== 0) {
      handleNavLinkOnClick(event, path);
    }
  };

  // manage navlink onclick
  const handleNavLinkOnClick = (event, path) => {
    if (path.includes("#")) {
      const anchor = (event.target.ownerDocument || document).querySelector(
        `${path}`
      );
      if (anchor) {
        smoothScroll(anchor, {
          behavior: "smooth",
          block: "start",
        }).then(() => {
          props.toggledrawer(false);
        });
      }
    } else {
      router.push(path);
      props.toggledrawer(false);
    }
  };

  function smoothScroll(elem, options) {
    return new Promise((resolve) => {
      if (!(elem instanceof Element)) {
        throw new TypeError("Argument 1 must be an Element");
      }
      let same = 0; // a counter
      let lastPos = null; // last known Y position
      // pass the user defined options along with our default
      const scrollOptions = Object.assign({ behavior: "smooth" }, options);

      // let's begin
      elem.scrollIntoView(scrollOptions);
      requestAnimationFrame(check);

      // this function will be called every painting frame
      // for the duration of the smooth scroll operation
      function check() {
        // check our current position
        const newPos = elem.getBoundingClientRect().top;

        if (newPos === lastPos) {
          // same as previous
          if (same++ > 2) {
            // if it's more than two frames
            /* @todo: verify it succeeded
             * if(isAtCorrectPosition(elem, options) {
             *   resolve();
             * } else {
             *   reject();
             * }
             * return;
             */
            return resolve(); // we've come to an halt
          }
        } else {
          same = 0; // reset our counter
          lastPos = newPos; // remember our current position
        }
        // check again next painting frame
        requestAnimationFrame(check);
      }
    });
  }

  return (
    <List component="nav" className={classes.root}>
      {/* level 1 */}
      {listItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <ListItem
            button
            selected={selectedIndexLevel1 === index}
            onClick={(event) =>
              handlerListItemClickLevel1(event, index, item.path)
            }
          >
            <ListItemIcon>
              {item.title.substring(0, 2).toUpperCase()}
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {item.submenu.length > 0 ? (
              selectedIndexLevel1 === index ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : (
              <React.Fragment>{""}</React.Fragment>
            )}
          </ListItem>

          {item.submenu.length > 0 ? (
            <Collapse
              in={selectedIndexLevel1 === index}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {/* level 2 */}
                {item.submenu.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <ListItem
                      button
                      selected={selectedIndexLevel2 === index}
                      onClick={(event) =>
                        handlerListItemClickLevel2(event, index, item.path)
                      }
                    >
                      <ListItemIcon>
                        {item.title.substring(0, 2).toUpperCase()}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                      {item.submenu.length > 0 ? (
                        selectedIndexLevel2 === index ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : (
                        <React.Fragment>{""}</React.Fragment>
                      )}
                    </ListItem>
                    {/* level 2 */}
                    <Collapse
                      in={selectedIndexLevel2 === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {/* level 3 */}
                        {item.submenu.map((item, index) => (
                          <React.Fragment key={item.id}>
                            <ListItem
                              button
                              selected={selectedIndexLevel3 === index}
                              onClick={(event) =>
                                handlerListItemClickLevel3(
                                  event,
                                  index,
                                  item.path
                                )
                              }
                            >
                              <ListItemIcon>
                                {item.title.substring(0, 2).toUpperCase()}
                              </ListItemIcon>
                              <ListItemText primary={item.title} />
                              {item.submenu.length > 0 ? (
                                selectedIndexLevel3 === index ? (
                                  <ExpandLess />
                                ) : (
                                  <ExpandMore />
                                )
                              ) : (
                                <React.Fragment>{""}</React.Fragment>
                              )}
                            </ListItem>
                            <Collapse
                              in={selectedIndexLevel3 === index}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {/* level 4 */}
                                {item.submenu.map((item, index) => (
                                  <React.Fragment key={item.id}>
                                    <ListItem
                                      button
                                      selected={selectedIndexLevel4 === index}
                                      onClick={(event) =>
                                        handlerListItemClickLevel4(
                                          event,
                                          index,
                                          item.path
                                        )
                                      }
                                    >
                                      <ListItemIcon>
                                        {item.title
                                          .substring(0, 2)
                                          .toUpperCase()}
                                      </ListItemIcon>
                                      <ListItemText primary={item.title} />
                                    </ListItem>
                                  </React.Fragment>
                                ))}
                              </List>
                            </Collapse>
                          </React.Fragment>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                ))}
              </List>
            </Collapse>
          ) : (
            <React.Fragment>{""}</React.Fragment>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

export default NavList;
