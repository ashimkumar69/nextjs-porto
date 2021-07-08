// react
import React, { Fragment } from "react";
// redux
import { useSelector } from "react-redux";
// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import ;
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";
import NewsItem from "./newsItem";

function News() {
  const { sectionHeader, news } = useSelector((state) => state.news.news);
  return (
    <Box component="section" py={10} id="news">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            <SectionsHeader
              marginbottom="10"
              subheadingtextalign="center"
              subheading={sectionHeader.subheading}
              headingtextalign="center"
              heading={sectionHeader.heading}
              bodytextalign="center"
              body={sectionHeader.body}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} justify="center">
          {news.map((item) => (
            <React.Fragment key={item.id}>
              <Grid item xs={12} sm={6} lg={4}>
                <NewsItem
                  headeravatar={item.headeravatar}
                  headertitle={item.headertitle}
                  headersubtitle={item.headersubtitle}
                  image={item.image}
                  date={item.date}
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

export default News;
