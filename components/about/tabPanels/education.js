// react
import React from "react";
// material
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

// import
import EducationListItem from "./listItem/listItem";

function Education() {
  return (
    <List aria-label="List of education" disablePadding>
      <EducationListItem
        title={<React.Fragment>Backend-end Developer</React.Fragment>}
        subtitle={
          <React.Fragment>
            - 327 1st St, Liverpool, NY 13088, United States
          </React.Fragment>
        }
        body={<React.Fragment> 2016</React.Fragment>}
      />

      <Divider component="li" />
      <EducationListItem
        title={<React.Fragment> Front-end Developer</React.Fragment>}
        subtitle={
          <React.Fragment>
            - 327 1st St, Liverpool, NY 13088, United States
          </React.Fragment>
        }
        body={<React.Fragment> 2015</React.Fragment>}
      />

      <Divider component="li" />
      <EducationListItem
        title={<React.Fragment> Graphic Designer</React.Fragment>}
        subtitle={
          <React.Fragment>
            - 327 1st St, Liverpool, NY 13088, United States
          </React.Fragment>
        }
        body={<React.Fragment> 2014</React.Fragment>}
      />
    </List>
  );
}

export default Education;
