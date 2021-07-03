import React, { Fragment } from "react";
// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import ;
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";
import ProjectItem from "./projectItem";
function Projects() {
  return (
    <Box component="section" py={10} id="projects">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={<Fragment>My complete project</Fragment>}
              headingtextalign="center"
              heading={<Fragment>My Latest Project</Fragment>}
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
            <ProjectItem
              image="/images/projects/1.jpg"
              subtitle={<Fragment>Photoshop</Fragment>}
              title={<Fragment>Photoshop Design</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  deleniti distinctio sit eum nesciunt dolor.
                </Fragment>
              }
              path="/login"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ProjectItem
              image="/images/projects/1.jpg"
              subtitle={<Fragment>Photoshop</Fragment>}
              title={<Fragment>Photoshop Design</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  deleniti distinctio sit eum nesciunt dolor.
                </Fragment>
              }
              path="/login"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ProjectItem
              image="/images/projects/1.jpg"
              subtitle={<Fragment>Photoshop</Fragment>}
              title={<Fragment>Photoshop Design</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  deleniti distinctio sit eum nesciunt dolor.
                </Fragment>
              }
              path="/login"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ProjectItem
              image="/images/projects/1.jpg"
              subtitle={<Fragment>Photoshop</Fragment>}
              title={<Fragment>Photoshop Design</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  deleniti distinctio sit eum nesciunt dolor.
                </Fragment>
              }
              path="/login"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ProjectItem
              image="/images/projects/1.jpg"
              subtitle={<Fragment>Photoshop</Fragment>}
              title={<Fragment>Photoshop Design</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  deleniti distinctio sit eum nesciunt dolor.
                </Fragment>
              }
              path="/login"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ProjectItem
              image="/images/projects/1.jpg"
              subtitle={<Fragment>Photoshop</Fragment>}
              title={<Fragment>Photoshop Design</Fragment>}
              body={
                <Fragment>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  deleniti distinctio sit eum nesciunt dolor.
                </Fragment>
              }
              path="/login"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
