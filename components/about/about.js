// react
import React, { Fragment } from "react";
// next
import Image from "next/image";

// redux
import { useSelector } from "react-redux";
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

  // about
  const about = useSelector((state) => state.about.about);

  return (
    <Box component="section" py={10} id="about">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box borderRadius={4}>
              <Box borderRadius={4} clone>
                <Image
                  src={about.image}
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
              subheading={about.sectionHeader.subheading}
              headingtextalign={downMd ? "center" : "left"}
              heading={about.sectionHeader.heading}
              bodytextalign={downMd ? "center" : "left"}
              body={about.sectionHeader.body}
            />

            <Box>
              <Tab tab={about.tab} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
