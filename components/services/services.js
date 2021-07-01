// react
import React, { Fragment } from "react";

// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import ;
import ServiceItem from "./serviceItem";
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";

function Services() {
  return (
    <Box component="section" py={10} id="services">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={<Fragment>What I can do for you</Fragment>}
              headingtextalign="center"
              heading={<Fragment>My Awesome Service</Fragment>}
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

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              title={<Fragment>Business Strategy</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas necessitatibus.
                </Fragment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              title={<Fragment>Website Development</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! voluptas vitae est! Velit, necessitatibus.
                </Fragment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              title={<Fragment>Marketing & Reporting</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! voluptas vitae est! Velit, necessitatibus.
                </Fragment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              title={<Fragment>Mobile App Development</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! voluptas vitae est! Velit, necessitatibus.
                </Fragment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              title={<Fragment>Graphics Designing</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! voluptas vitae est! Velit, necessitatibus.
                </Fragment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              title={<Fragment>Web designing</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! voluptas vitae est! Velit, necessitatibus.
                </Fragment>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
