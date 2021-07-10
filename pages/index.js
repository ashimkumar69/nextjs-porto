// react
import React, { Fragment } from "react";

// import
import Navbar from "../components/navbar/navbar";
import HeroBanner from "../components/heroBanner/heroBanner";
import About from "../components/about/about";
import Services from "../components/services/services";
import Projects from "../components/projects/projects";
import Testimonials from "../components/testimonials/testimonials";
import News from "../components/news/news";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";

import { getNavMenuList } from "../db/navMenuListDB";
import { getHeroBanner } from "../db/heroBanneDB";
import { getAbout } from "../db/aboutDB";
import { getServices } from "../db/servicesDB";
import { getProjects } from "../db/projectsDB";
import { getTestimonials } from "../db/testimonialsDB";
import { getNews } from "../db/newsDB";
import { getContact } from "../db/contactDB";
import { getFooter } from "../db/footerDB";
import { Box } from "@material-ui/core";

function Home(props) {
  return (
    <Fragment>
      <Box component="header">
        <Navbar navmenulist={props.navMenuList} />
      </Box>
      <Box component="main">
        <HeroBanner herobanner={props.heroBanner} />
        <About about={props.about} />
        <Services services={props.services} />
        <Projects projects={props.projects} />
        <Testimonials testimonials={props.testimonials} />
        <News news={props.news} />
        <Contact contact={props.contact} />
      </Box>

      <Box component="footer">
        <Footer footer={props.footer} />
      </Box>
    </Fragment>
  );
}

export async function getStaticProps() {
  const data1 = await getNavMenuList();
  const data2 = await getHeroBanner();
  const data3 = await getAbout();
  const data4 = await getServices();
  const data5 = await getProjects();
  const data6 = await getTestimonials();
  const data7 = await getNews();
  const data8 = await getContact();
  const data9 = await getFooter();

  let [d1, d2, d3, d4, d5, d6, d7, d8, d9] = await Promise.all([
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
  ]);

  const navMenuList = JSON.parse(d1);
  const heroBanner = JSON.parse(d2);
  const about = JSON.parse(d3);
  const services = JSON.parse(d4);
  const projects = JSON.parse(d5);
  const testimonials = JSON.parse(d6);
  const news = JSON.parse(d7);
  const contact = JSON.parse(d8);
  const footer = JSON.parse(d9);

  if (
    !navMenuList ||
    !heroBanner ||
    !about ||
    !services ||
    !projects ||
    !testimonials ||
    !news ||
    !contact ||
    !footer
  ) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      navMenuList,
      heroBanner,
      about,
      services,
      projects,
      testimonials,
      news,
      contact,
      footer,
    },
    revalidate: 10,
  };
}

export default Home;
