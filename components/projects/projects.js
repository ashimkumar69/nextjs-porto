import React from "react";

// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import ;
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";
import ProjectItem from "./projectItem";
function Projects(props) {
  return (
    <Box component="section" py={10} id="projects">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={props.projects.sectionHeader.subheading}
              headingtextalign="center"
              heading={props.projects.sectionHeader.heading}
              bodytextalign="center"
              body={props.projects.sectionHeader.body}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} justify="center">
          {props.projects.projects.map((item) => (
            <React.Fragment key={item.id}>
              <Grid item xs={12} sm={6} lg={4}>
                <ProjectItem
                  image={item.image}
                  subtitle={item.subtitle}
                  title={item.title}
                  body={item.body}
                  path={item.path}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
