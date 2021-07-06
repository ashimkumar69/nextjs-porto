// react
import React, { Fragment } from "react";

// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BusinessIcon from "@material-ui/icons/Business";
import LanguageIcon from "@material-ui/icons/Language";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import PieChartIcon from "@material-ui/icons/PieChart";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";

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
            <ServiceItem
              icon={
                <Fragment>
                  <BusinessIcon className="icon" />
                </Fragment>
              }
              title={<Fragment>Business Strategy</Fragment>}
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
              icon={
                <Fragment>
                  <LanguageIcon className="icon" />
                </Fragment>
              }
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
              icon={
                <Fragment>
                  <LocalMallIcon className="icon" />
                </Fragment>
              }
              title={<Fragment>Marketing &#38; Reporting</Fragment>}
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
              icon={
                <Fragment>
                  <MobileFriendlyIcon className="icon" />
                </Fragment>
              }
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
              icon={
                <Fragment>
                  <PieChartIcon className="icon" />
                </Fragment>
              }
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
              icon={
                <Fragment>
                  <ArtTrackIcon className="icon" />
                </Fragment>
              }
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
