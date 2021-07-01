// react
import React, { Fragment } from "react";
// next
import Image from "next/image";
// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import
import Tab from "./tab";
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";

function About() {
  return (
    <Box component="section" py={10} id="about">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={5}>
            <Box borderRadius={4}>
              <Box borderRadius={4} clone>
                <Image
                  src="/images/about/1.jpg"
                  alt="hero banner image"
                  width={495}
                  height={580}
                  layout="responsive"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <SectionsHeader
              marginbottom="4"
              subheadingtextalign="left"
              subheading={<Fragment>My About Details</Fragment>}
              headingtextalign="left"
              heading={<Fragment>About Me</Fragment>}
              paragraphtextalign="left"
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

            <Box>
              <Tab />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
