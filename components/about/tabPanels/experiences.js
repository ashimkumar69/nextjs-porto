// react
import React from "react";
// material
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

// import
import ExperienceListItem from "./listItem/listItem";

function Experiences() {
  return (
    <List aria-label="List of experience" disablePadding>
      <ExperienceListItem
        title={<React.Fragment>Sr. Front-end Developer</React.Fragment>}
        subtitle={<React.Fragment>- Google</React.Fragment>}
        body={<React.Fragment> 2020 - Current</React.Fragment>}
      />

      <Divider component="li" />
      <ExperienceListItem
        title={<React.Fragment> Front-end Developer</React.Fragment>}
        subtitle={<React.Fragment>- Microsoft</React.Fragment>}
        body={<React.Fragment> 2018 - 2020</React.Fragment>}
      />

      <Divider component="li" />
      <ExperienceListItem
        title={<React.Fragment> Front-end Developer</React.Fragment>}
        subtitle={<React.Fragment>- Amazon</React.Fragment>}
        body={<React.Fragment> 2017 - 2018</React.Fragment>}
      />
    </List>
  );
}

export default Experiences;
