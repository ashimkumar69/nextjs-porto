// react
import React from "react";

// next
import Image from "next/image";
import Link from "next/link";
// material
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import
import Rgba from "color-to-rgba";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  slider: {
    position: "relative",
    cursor: "move",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: Rgba(theme.palette.common.black, 0.1),
  },

  gradient_color: {
    background:
      "linear-gradient(45deg,#fd4766 20.69%,#7644ff 50.19%,#1c99fe 79.69%)",
    backgroundClip: "text",
    "-webkit-background-clip": "text !important",
    color: "transparent",
    display: "inline-block",
  },

  sub_heading: {
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.body2.fontSize,
      textAlign: "center",
      display: "block",
      marginBottom: theme.spacing(1),
    },
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
      textAlign: "center",
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    padding: theme.spacing(1.5, 5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.6, 3),
    },
  },
}));

let imageSize = {
  width: 1920,
  height: 700,
};

function HeroBannerItem() {
  //material style
  const classes = useStyles();

  const downSm = useMediaQuery("(max-width:599.95px)");
  const smUp = useMediaQuery("(min-width:600px)");
  const lgUp = useMediaQuery("(min-width:1280px)");
  if (lgUp) {
    imageSize = {
      width: 1920,
      height: 700,
    };
  } else if (smUp) {
    imageSize = {
      width: 960,
      height: 500,
    };
  } else if (downSm) {
    imageSize = {
      width: 600,
      height: 400,
    };
  }
  console.log(imageSize);
  return (
    <Box className={clsx(classes.slider)}>
      <Image
        src="/images/heroBanner/1.jpg"
        alt="hero banner image"
        width={imageSize.width}
        height={imageSize.height}
        layout="responsive"
      />
      <Box className={clsx(classes.overlay)} display="flex" alignItems="center">
        <Box flexGrow={1}>
          <Container maxWidth="lg">
            <Grid container justify="center">
              <Grid item xs={10} sm={8} lg={6}>
                <Typography
                  variant="subtitle1"
                  component="span"
                  className={clsx(classes.sub_heading, classes.gradient_color)}
                >
                  Web digital designer
                </Typography>

                <Typography
                  variant="h2"
                  component="h2"
                  className={clsx(classes.heading, classes.gradient_color)}
                >
                  Hello, I’m Designer. Welcome to my World.
                </Typography>
                <Box textAlign="center">
                  <Link href="/login">
                    <Button
                      component="a"
                      variant="contained"
                      color="primary"
                      className={clsx(classes.button)}
                    >
                      Hire Me
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroBannerItem;
