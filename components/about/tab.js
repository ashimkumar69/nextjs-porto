// react
import React from "react";

// material
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

// import
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import Skills from "./tabPanels/skills";
import Experiences from "./tabPanels/experiences";
import Education from "./tabPanels/education";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skills-tabpanel-${index}`}
      aria-labelledby={`skills-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box px={3} py={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `skills-tab-${index}`,
    "aria-controls": `skills-tabpanel-${index}`,
  };
}

export default function SkillTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper elevation={0}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Skills tabs"
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Skills" {...a11yProps(0)} />
        <Tab label="Experience" {...a11yProps(1)} />
        <Tab label="Education" {...a11yProps(2)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Skills />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Experiences />
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <Education />
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
}
