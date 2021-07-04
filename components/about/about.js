// react
import React, { Fragment } from "react";
// next
import Image from "next/image";
// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import
import Tab from "./tab";
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";

function About() {
  // banner image size in different screen
  let downMd = useMediaQuery("(max-width:1279.95px)");

  return (
    <Box component="section" py={10} id="about">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box borderRadius={4}>
              <Box borderRadius={4} clone>
                <Image
                  src="/images/about/1.png"
                  alt="hero banner image"
                  width={500}
                  height={560}
                  layout="responsive"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <SectionsHeader
              marginbottom="4"
              subheadingtextalign={downMd ? "center" : "left"}
              subheading={<Fragment>My About Details</Fragment>}
              headingtextalign={downMd ? "center" : "left"}
              heading={<Fragment>About Me</Fragment>}
              bodytextalign={downMd ? "center" : "left"}
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
