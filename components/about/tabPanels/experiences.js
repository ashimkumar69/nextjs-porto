// react
import React from "react";
// material
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

// import
import ExperienceListItem from "./listItem/listItem";

function Experiences(props) {

  return (
    <List aria-label="List of experience" disablePadding>
      {props.experiences.map((item, index, array) => (
        <React.Fragment key={item.id}>
          <ExperienceListItem
            title={item.title}
            subtitle={item.subtitle}
            body={item.body}
          />
          {index !== array.length - 1 && <Divider component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}

export default Experiences;
