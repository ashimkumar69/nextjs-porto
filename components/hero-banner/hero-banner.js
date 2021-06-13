// react
import React from "react";



// import slick
import Slider from "react-slick";


// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// import
import HeroBannerItem from "./hero-banner-item.js";

const useStyles = makeStyles((theme) => ({
  slick_slider: {
    "& > .slick-dots": {
      bottom: 0,
      "& > li": {
        "& > button::before": {
          content: " '' !important",
          width: "7px",
          height: "7px",
          padding: 0,
          backgroundColor: theme.palette.common.black,
          borderRadius: "50%",
          transition:
            "width 300ms ease-in-out, background-color 300ms ease-in-out",
        },
        "&.slick-active": {
          "& > button::before": {
            width: "25px",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "15px",
          },
        },
      },
    },
  },
}));

function HeroBanner() {
  //material style
  const classes = useStyles();

  // slick slider
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Box component="section">
      <Container maxWidth="xl" disableGutters>
        <Slider {...settings} className={classes.slick_slider}>
          <HeroBannerItem />
          <HeroBannerItem />
          <HeroBannerItem />
        </Slider>
      </Container>
    </Box>
  );
}

export default HeroBanner;