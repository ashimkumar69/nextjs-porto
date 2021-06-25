// react
import React from "react";

// next
import Image from "next/image";
import Link from "next/link";
// material
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// import
import Rgba from "color-to-rgba";

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
  color: {
    color: theme.palette.common.white,
  },
  gradient_color: {
    background:
      "linear-gradient(45deg,#fd4766 20.69%,#7644ff 50.19%,#1c99fe 79.69%)",
    backgroundClip: "text",
    "-webkit-background-clip": "text !important",
    color: "transparent",
    display: "inline-block",
  },
  text_uppercase: {
    textTransform: "uppercase",
  },
}));

const HireMeButton = withStyles(() => ({
  root: {
    padding: "10px 40px",
  },
}))(Button);

function HeroBannerItem() {
  //material style
  const classes = useStyles();
  return (
    <Box className={classes.slider}>
      <Image
        src="/images/heroBanner/1.jpg"
        alt="hero banner image"
        width={1900}
        height={700}
        layout="responsive"
      />
      <Box className={classes.overlay} display="flex" alignItems="center">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={6}>
              <Typography component="div">
                <Box
                  my={0}
                  fontSize="subtitle1.fontSize"
                  fontWeight="fontWeightBold"
                  letterSpacing={0.5}
                  lineHeight={1}
                  component="span"
                  className={`${classes.color} ${classes.gradient_color} ${classes.text_uppercase}`}
                >
                  Web digital designer
                </Box>
                <Box
                  my={3}
                  fontSize="h2.fontSize"
                  fontWeight="fontWeightBold"
                  lineHeight={1.25}
                  component="h2"
                  className={`${classes.color} ${classes.gradient_color}`}
                >
                  Hello, I’m Designer. Welcome to my World.
                </Box>
              </Typography>
              <Link href="/login">
                <HireMeButton component="a" variant="contained" color="primary">
                  Hire Me
                </HireMeButton>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HeroBannerItem;
