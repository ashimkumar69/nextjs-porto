import React from "react";

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
  { id: 1, title: "Home", path: "home", submenu: [] },
  { id: 2, title: "About", path: "about", submenu: [] },
  { id: 3, title: "Services", path: "services", submenu: [] },
  { id: 4, title: "Projects", path: "projects", submenu: [] },
  {
    id: 5,
    title: "Testimonials",
    path: "testimonials",
    submenu: [],
  },
  { id: 6, title: "News", path: "news", submenu: [] },
  { id: 7, title: "Contact", path: "contact", submenu: [] },
  {
    id: 8,
    title: "Pages",
    path: "contact",
    submenu: [
      {
        id: 1,
        title: "Auth",
        path: "",
        submenu: [
          {
            id: 1,
            title: "Login",
            path: "home",
            submenu: [],
          },

          { id: 2, title: "Register", path: "home", submenu: [] },
          { id: 3, title: "Reset Password", path: "home", submenu: [] },
        ],
      },
      {
        id: 2,
        title: "Error Page",
        path: "",
        submenu: [
          { id: 1, title: "404 Page", path: "home", submenu: [] },
          { id: 2, title: "500 Page", path: "home", submenu: [] },
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
    title: "Test Pages",
    path: "contact",
    submenu: [
      { id: 1, title: "Pages 1", path: "home", submenu: [] },
      {
        id: 2,
        title: "Pages 2",
        path: "home",
        submenu: [
          {
            id: 1,
            title: "Auth",
            path: "",
            submenu: [
              {
                id: 1,
                title: "Login",
                path: "home",
                submenu: [],
              },

              { id: 2, title: "Register", path: "home", submenu: [] },
              { id: 3, title: "Reset Password", path: "home", submenu: [] },
            ],
          },
          {
            id: 2,
            title: "Error Page",
            path: "",
            submenu: [
              { id: 1, title: "404 Page", path: "home", submenu: [] },
              { id: 2, title: "500 Page", path: "home", submenu: [] },
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
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",

    // backgroundColor: theme.palette.background.paper,
  },
  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function NavList() {
  const classes = useStyles();

  //    selected  list level 1
  const [selectedIndexLevel1, setSelectedIndexLevel1] = React.useState("");
  const handlerListItemClickLevel1 = (index) => {
    let isSelected = selectedIndexLevel1 === index ? "" : index;
    setSelectedIndexLevel1(isSelected);
  };

  //    selected  list level 2
  const [selectedIndexLevel2, setSelectedIndexLevel2] = React.useState("");
  const handlerListItemClickLevel2 = (index) => {
    let isSelected = selectedIndexLevel2 === index ? "" : index;
    setSelectedIndexLevel2(isSelected);
  };

  //    selected  list level 3
  const [selectedIndexLevel3, setSelectedIndexLevel3] = React.useState("");
  const handlerListItemClickLevel3 = (index) => {
    let isSelected = selectedIndexLevel3 === index ? "" : index;
    setSelectedIndexLevel3(isSelected);
  };

  //    selected  list level 4
  const [selectedIndexLevel4, setSelectedIndexLevel4] = React.useState("");
  const handlerListItemClickLevel4 = (index) => {
    let isSelected = selectedIndexLevel4 === index ? "" : index;
    setSelectedIndexLevel4(isSelected);
  };

  return (
    <List component="nav" className={classes.root}>
      {/* level 1 */}
      {listItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <ListItem
            button
            selected={selectedIndexLevel1 === index}
            onClick={() => handlerListItemClickLevel1(index)}
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
                      onClick={() => handlerListItemClickLevel2(index)}
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
                              onClick={() => handlerListItemClickLevel3(index)}
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
                                      onClick={() =>
                                        handlerListItemClickLevel4(index)
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
