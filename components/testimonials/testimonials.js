import React, { Fragment } from "react";
// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// import slick
import Slider from "react-slick";

// import
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";
import TestimonialItem from "./testimonialItem";

const useStyles = makeStyles((theme) => ({
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
      bottom: "-35px",
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
function Testimonials() {
  //material style
  const classes = useStyles();
  // slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Box component="section" py={10} id="testimonials">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={<Fragment>Top Testimonials</Fragment>}
              headingtextalign="center"
              heading={<Fragment>Testimonials</Fragment>}
              paragraphtextalign="center"
              paragraph={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! Error omnis deserunt quae, reprehenderit
                  necessitatibus quibusdam molestias sed, voluptas vitae est!
                  Velit, necessitatibus.
                </Fragment>
              }
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Slider {...settings} className={classes.slick_slider}>
              <Box p={2}>
                <TestimonialItem />
              </Box>
              <Box p={2}>
                <TestimonialItem />
              </Box>
              <Box p={2}>
                <TestimonialItem />
              </Box>
              <Box p={2}>
                <TestimonialItem />
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
