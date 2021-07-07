// react
import React from "react";
// material
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

// import
import EducationListItem from "./listItem/listItem";

function Education(props) {
  return (
    <List aria-label="List of education" disablePadding>
      {props.education.map((item, index, array) => (
        <React.Fragment key={item.id}>
          <EducationListItem
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

export default Education;
