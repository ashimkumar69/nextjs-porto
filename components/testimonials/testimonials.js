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
      bottom: -theme.spacing(4),

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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box component="section" py={10} id="testimonials">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={<Fragment>Top Testimonials</Fragment>}
              headingtextalign="center"
              heading={<Fragment>Testimonials</Fragment>}
              bodytextalign="center"
              body={
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
            <Slider {...settings} className={classes.slickSlider}>
              <Box p={2}>
                <TestimonialItem
                  headeravatar="/images/testimonials/1.jpg"
                  headertitle="Shrimp and Chorizo Paella"
                  headersubtitle="September 14, 2016"
                  body=" This impressive paella is a perfect party dish and a fun meal to
                  cook together with your guests. Add 1 cup of frozen peas along
                  with the mussels, if you like."
                  value="4.5"
                />
              </Box>
              <Box p={2}>
                <TestimonialItem
                  headeravatar="/images/testimonials/1.jpg"
                  headertitle="Shrimp and Chorizo Paella"
                  headersubtitle="September 14, 2016"
                  body=" This impressive paella is a perfect party dish and a fun meal to
                  cook together with your guests. Add 1 cup of frozen peas along
                  with the mussels, if you like."
                  value="4"
                />
              </Box>
              <Box p={2}>
                <TestimonialItem
                  headeravatar="/images/testimonials/1.jpg"
                  headertitle="Shrimp and Chorizo Paella"
                  headersubtitle="September 14, 2016"
                  body=" This impressive paella is a perfect party dish and a fun meal to
                  cook together with your guests. Add 1 cup of frozen peas along
                  with the mussels, if you like."
                  value="3.5"
                />
              </Box>
              <Box p={2}>
                <TestimonialItem
                  headeravatar="/images/testimonials/1.jpg"
                  headertitle="Shrimp and Chorizo Paella"
                  headersubtitle="September 14, 2016"
                  body=" This impressive paella is a perfect party dish and a fun meal to
                  cook together with your guests. Add 1 cup of frozen peas along
                  with the mussels, if you like."
                  value="5"
                />
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
