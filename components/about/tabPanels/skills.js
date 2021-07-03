// react
import React from "react";
// material
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import
import ProgressBar from "./progressBar";

function Skills() {
  return (
    <List aria-label="List of Bar" disablePadding>
      <ListItem disableGutters dense>
        <ListItemText primary="HTML" />
      </ListItem>
      <ListItem disableGutters dense>
        <ProgressBar basevalue={90} />
      </ListItem>

      <ListItem disableGutters dense>
        <ListItemText primary="CSS" />
      </ListItem>

      <ListItem disableGutters dense>
        <ProgressBar basevalue={85} />
      </ListItem>
      <ListItem disableGutters dense>
        <ListItemText primary="JS" />
      </ListItem>

      <ListItem disableGutters dense>
        <ProgressBar basevalue={80} />
      </ListItem>
      <ListItem disableGutters dense>
        <ListItemText primary="REACTJS" />
      </ListItem>

      <ListItem disableGutters dense>
        <ProgressBar basevalue={70} />
      </ListItem>
    </List>
  );
}

export default Skills;
