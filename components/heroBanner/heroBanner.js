// react
import React from "react";

// import slick
import Slider from "react-slick";

// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// import
import HeroBannerItem from "./heroBannerItem.js";
import clsx from "clsx";

// redux
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    paddingTop: props.height,
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
    },
  }),
  slick_slider: {
    "& > .slick-prev": {
      left: "25px",
      zIndex: 99,
      "&:hover , &:focus": {
        "&::before": {
          opacity: 1,
        },
      },

      "&::before": {
        color: theme.palette.primary.main,
        fontSize: "30px",
        opacity: 0.54,
      },
    },
    "& > .slick-next": {
      right: "25px",
      zIndex: 99,
      "&:hover , &:focus": {
        "&::before": {
          opacity: 1,
        },
      },

      "&::before": {
        color: theme.palette.primary.main,
        fontSize: "30px",
        opacity: 0.54,
      },
    },
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
  const onScrollBannerTopHeight = useSelector(
    (state) => state.onScrollBannerTopHeight.height
  );

  const props = { height: onScrollBannerTopHeight };
  //material style
  const classes = useStyles(props);

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
  };

  return (
    <Box
      component="section"
      id="home"
      className={clsx("back-to-top-anchor", classes.root)}
    >
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
