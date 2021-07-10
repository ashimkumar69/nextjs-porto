// react
import React from "react";

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

function Services(props) {
  const icon = (index) => {
    let icon;
    switch (index) {
      case 0:
        return (icon = <BusinessIcon className="icon" />);
      case 1:
        return (icon = <LanguageIcon className="icon" />);
      case 2:
        return (icon = <LocalMallIcon className="icon" />);
      case 3:
        return (icon = <MobileFriendlyIcon className="icon" />);
      case 4:
        return (icon = <PieChartIcon className="icon" />);
      case 5:
        return (icon = <ArtTrackIcon className="icon" />);
    }
    return icon;
  };

  return (
    <Box component="section" py={10} id="services">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={props.services.sectionHeader.subheading}
              headingtextalign="center"
              heading={props.services.sectionHeader.heading}
              bodytextalign="center"
              body={props.services.sectionHeader.body}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} justify="center">
          {props.services.services.map((item, index) => (
            <React.Fragment key={item.id}>
              <Grid item xs={12} sm={6} lg={4}>
                <ServiceItem
                  icon={icon(index)}
                  title={item.title}
                  body={item.body}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
