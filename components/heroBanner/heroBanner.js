// react
import React from "react";

// import slick
import Slider from "react-slick";

// material
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

// import
import HeroBannerItem from "./heroBannerItem.js";

const useStyles = makeStyles((theme) => ({
  slickSlider: {
    "& > .slick-prev": {
      left: theme.spacing(3),
    },
    "& > .slick-next": {
      right: theme.spacing(3),
    },
    "& > .slick-prev , .slick-next": {
      zIndex: 99,
      "&:hover , &:focus": {
        "&::before": {
          opacity: 1,
        },
      },

      "&::before": {
        color: theme.palette.primary.main,
        fontSize: theme.spacing(4),
        opacity: 0.54,
      },
    },

    "& > .slick-dots": {
      bottom: theme.spacing(1.25),
      [theme.breakpoints.down("sm")]: {
        bottom: theme.spacing(0.5),
      },
      "& > li": {
        height: theme.spacing(1),
        "& > button": {
          height: theme.spacing(1),
          "&::before": {
            content: " '' !important",
            width: theme.spacing(1),
            height: theme.spacing(1),
            padding: 0,
            backgroundColor: theme.palette.common.black,
            borderRadius: "50%",
            transition:
              "width 300ms ease-in-out, background-color 300ms ease-in-out",
          },
        },
        "&.slick-active": {
          "& > button": {
            "&::before": {
              width: theme.spacing(3),
              backgroundColor: theme.palette.primary.main,
              borderRadius: theme.spacing(2),
            },
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
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box component="section">
      <Slider {...settings} className={classes.slickSlider}>
        <HeroBannerItem />
        <HeroBannerItem />
        <HeroBannerItem />
      </Slider>
    </Box>
  );
}

export default HeroBanner;
