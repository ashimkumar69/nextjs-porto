import React, { Fragment } from "react";

// redux
import { useSelector } from "react-redux";
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
    // "& > .slick-prev": {
    //   left: theme.spacing(3),
    // },
    // "& > .slick-next": {
    //   right: theme.spacing(3),
    // },
    // "& > .slick-prev , .slick-next": {
    //   zIndex: 99,
    //   "&:hover , &:focus": {
    //     "&::before": {
    //       opacity: 1,
    //     },
    //   },

    //   "&::before": {
    //     color: theme.palette.primary.main,
    //     fontSize: theme.spacing(4),
    //     opacity: 0.54,
    //   },
    // },

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

  const { sectionHeader, testimonials } = useSelector(
    (state) => state.testimonials.testimonials
  );
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
              subheading={sectionHeader.subheading}
              headingtextalign="center"
              heading={sectionHeader.heading}
              bodytextalign="center"
              body={sectionHeader.body}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Slider {...settings} className={classes.slickSlider}>
              {testimonials.map((item) => (
                <React.Fragment key={item.id}>
                  <Box p={2}>
                    <TestimonialItem
                      headeravatar={item.headeravatar}
                      headertitle={item.headertitle}
                      headersubtitle={item.headersubtitle}
                      body={item.body}
                      value={item.rating}
                    />
                  </Box>
                </React.Fragment>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
