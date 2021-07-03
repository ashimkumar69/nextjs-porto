// react
import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import
import PropTypes from "prop-types";

function LinearProgressWithLabel(props) {
  let onlyXs = useMediaQuery("(max-width:599.95px)");
  return (
    <Box display="flex" alignItems="center">
      <Box width={onlyXs ? "65%" : "85%"} mr={1}>
        <LinearProgress variant="determinate" value={props.value} />
      </Box>
      <Box width={onlyXs ? "35%" : "15%"}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}% / ${props.basevalue}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LinearWithValueLabel(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(5);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.basevalue ? 5 : prevProgress + 5
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} basevalue={props.basevalue} />
    </div>
  );
}
