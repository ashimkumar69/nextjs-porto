// react
import React, { Fragment } from "react";

// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import ;
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";
import NewsItem from "./newsItem";

function News() {
  return (
    <Box component="section" py={10} id="news">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={<Fragment>Latest News</Fragment>}
              headingtextalign="center"
              heading={<Fragment> News</Fragment>}
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

        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={6} lg={4}>
            <NewsItem
              headeravatar="/images/testimonials/1.jpg"
              headertitle="Shrimp and Chorizo Paella"
              headersubtitle="CEO Math Private Ltd."
              image="/images/news/1.jpg"
              date="2 oct 2021"
              title="This impressive paella is a  party"
              body=" This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the
              mussels, if you like."
              path="/login"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <NewsItem
              headeravatar="/images/testimonials/1.jpg"
              headertitle="Shrimp and Chorizo Paella"
              headersubtitle="CEO Math Private Ltd."
              image="/images/news/1.jpg"
              date="2 oct 2021"
              title="This impressive paella is a  party"
              body=" This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the
              mussels, if you like."
              path="/login"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <NewsItem
              headeravatar="/images/testimonials/1.jpg"
              headertitle="Shrimp and Chorizo Paella"
              headersubtitle="CEO Math Private Ltd."
              image="/images/news/1.jpg"
              date="2 oct 2021"
              title="This impressive paella is a  party"
              body=" This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the
              mussels, if you like."
              path="/login"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default News;
