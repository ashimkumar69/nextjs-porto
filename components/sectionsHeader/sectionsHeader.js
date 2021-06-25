// react
import React from "react";

// material
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gradient_color: {
    background:
      "linear-gradient(45deg,#fd4766 20.69%,#7644ff 50.19%,#1c99fe 79.69%)",
    backgroundClip: "text",
    "-webkit-background-clip": "text !important",
    color: "transparent",
    display: "inline-block",
  },
}));

function SectionsHeader(props) {
  const classes = useStyles();
  return (
    <Box mb={6}>
      <Typography component="div" align={props.section_align}>
        <Box
          fontSize="subtitle1.fontSize"
          fontWeight="fontWeightBold"
          letterSpacing={0.5}
          lineHeight={1}
          component="span"
          className={`${classes.gradient_color}`}
        >
          {props.subtitle}
        </Box>
        <Box
          my={2}
          fontSize="h2.fontSize"
          fontWeight="fontWeightBold"
          lineHeight={1}
          component="h2"
          color="text.primary"
        >
          {props.title}
        </Box>
        <Box
          my={0}
          textAlign={props.body_text_align}
          fontSize="body1.fontSize"
          fontWeight="fontWeightRegular"
          lineHeight={1.5}
          component="p"
          color="text.secondary"
        >
          {props.body}
        </Box>
      </Typography>
    </Box>
  );
}

export default SectionsHeader;
