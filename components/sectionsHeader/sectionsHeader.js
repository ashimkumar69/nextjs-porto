// react
import React from "react";

// material
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  textAlign: (props) => ({
    textAlign: props.subheadingtextalign,
  }),
  subHeading: {
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    marginBottom: 0,
  },
  gradientColor: {
    background:
      "linear-gradient(45deg,#fd4766 20.69%,#7644ff 50.19%,#1c99fe 79.69%)",
    backgroundClip: "text",
    "-webkit-background-clip": "text !important",
    color: "transparent",
    display: "inline-block",
  },
}));

function SectionsHeader(props) {
  const classes = useStyles(props);
  return (
    <Box mb={+props.marginbottom}>
      <Box className={clsx(classes.textAlign)}>
        <Typography
          variant="subtitle1"
          component="span"
          className={clsx(classes.subHeading, classes.gradientColor)}
        >
          {props.subheading}
        </Typography>
      </Box>

      <Typography
        variant="h3"
        component="h2"
        align={props.headingtextalign}
        className={clsx(classes.heading)}
      >
        {props.heading}
      </Typography>

      <Typography
        variant="body1"
        component="p"
        align={props.paragraphtextalign}
        className={clsx(classes.paragraph)}
      >
        {props.paragraph}
      </Typography>
    </Box>
  );
}

export default SectionsHeader;
