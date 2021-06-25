// react
import React from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";

// material
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

// import
import ProgressBar from "./progressBar";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  listSubheader: {
    lineHeight: 1,
  },
  inline: {
    display: "inline",
  },
}));

export default function SkillTabs() {
  const classes = useStyles();
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
          <List aria-label="List of Bar">
            <ListSubheader className={classes.listSubheader}>
              HTML
            </ListSubheader>

            <ListItem>
              <ProgressBar basevalue={90} />
            </ListItem>

            <ListSubheader className={classes.listSubheader}>CSS</ListSubheader>
            <ListItem>
              <ProgressBar basevalue={85} />
            </ListItem>

            <ListSubheader className={classes.listSubheader}>JS</ListSubheader>
            <ListItem>
              <ProgressBar basevalue={80} />
            </ListItem>

            <ListSubheader className={classes.listSubheader}>
              REACTJS
            </ListSubheader>
            <ListItem>
              <ProgressBar basevalue={70} />
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <List aria-label="List of experience">
            <ListItem>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightMedium"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        Sr. Front-end Developer
                      </Box>
                    </Typography>
                    {" - Google"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightRegular"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        2020 - Current
                      </Box>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightMedium"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        Front-end Developer
                      </Box>
                    </Typography>
                    {" - Microsoft"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightRegular"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        2018 - 2020
                      </Box>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightMedium"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        Front-end Developer
                      </Box>
                    </Typography>
                    {" - Amazon"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightRegular"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        2017 - 2018
                      </Box>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <List aria-label="List of education">
            <ListItem>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightMedium"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        Backend-end Developer
                      </Box>
                    </Typography>
                    {" - 327 1st St, Liverpool, NY 13088, United States"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightRegular"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        2016
                      </Box>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightMedium"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        Front-end Developer
                      </Box>
                    </Typography>
                    {" - 327 1st St, Liverpool, NY 13088, United States"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightRegular"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        2015
                      </Box>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightMedium"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        Graphic Designer
                      </Box>
                    </Typography>
                    {" - 327 1st St, Liverpool, NY 13088, United States"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline}>
                      <Box
                        my={1}
                        fontSize="body1.fontSize"
                        fontWeight="fontWeightRegular"
                        lineHeight={1}
                        component="span"
                        color="text.primary"
                      >
                        2014
                      </Box>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
}
