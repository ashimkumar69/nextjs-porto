// react
import React from "react";
// material
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import
import ProgressBar from "./progressBar";

function Skills(props) {
  return (
    <List aria-label="List of skills" disablePadding>
      {props.skills.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem disableGutters dense>
            <ListItemText primary={item.primaryTitle} />
          </ListItem>
          <ListItem disableGutters dense>
            <ProgressBar basevalue={item.basevalue} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}

export default Skills;
