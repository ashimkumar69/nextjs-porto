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
    <Box component="section" py={10}  id="news">
      <Container maxWidth="lg">
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xs={8}>
            <SectionsHeader
              section_align="center"
              subtitle={<Fragment>Latest News</Fragment>}
              title={<Fragment>Latest News</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! Error omnis deserunt quae, reprehenderit
                  necessitatibus quibusdam molestias sed, voluptas vitae est!
                  Velit, necessitatibus.
                </Fragment>
              }
              body_text_align="center"
            />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <NewsItem />
          </Grid>
          <Grid item xs={4}>
            <NewsItem />
          </Grid>
          <Grid item xs={4}>
            <NewsItem />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default News;
