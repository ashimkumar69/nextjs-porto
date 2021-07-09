// react
import { Fragment } from "react";
// redux
import { useDispatch } from "react-redux";

// store Action
import {
  getNavMenuListAction,
  getHeroBannerAction,
  getAboutAction,
  getServicesAction,
  getProjectsAction,
  getTestimonialsAction,
  getNewsAction,
  getContactAction,
  getFooterAction,
} from "../reduxStore/actions/index";

// import
import HeroBanner from "../components/heroBanner/heroBanner";
import About from "../components/about/about";
import Services from "../components/services/services";
import Projects from "../components/projects/projects";
import Testimonials from "../components/testimonials/testimonials";
import News from "../components/news/news";
import Contact from "../components/contact/contact";
import { getNavMenuList } from "../db/navMenuList";
import { getHeroBanner } from "../db/heroBanne";
import { getAbout } from "../db/about";
import { getServices } from "../db/services";
import { getProjects } from "../db/projects";
import { getTestimonials } from "../db/testimonials";
import { getNews } from "../db/news";
import { getContact } from "../db/contact";
import { getFooter } from "../db/footer";

function Home(props) {
  const dispatch = useDispatch();
  // navMenuList
  dispatch(getNavMenuListAction(props.navMenuList));
  // heroBanner
  dispatch(getHeroBannerAction(props.heroBanner));
  // about
  dispatch(getAboutAction(props.about));
  // services
  dispatch(getServicesAction(props.services));
  // projects
  dispatch(getProjectsAction(props.projects));
  // testimonials
  dispatch(getTestimonialsAction(props.testimonials));
  // news
  dispatch(getNewsAction(props.news));
  // contact
  dispatch(getContactAction(props.contact));
  // footer
  dispatch(getFooterAction(props.footer));

  return (
    <Fragment>
      <HeroBanner />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <News />
      <Contact />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const navMenuList = JSON.parse(await getNavMenuList());
  const heroBanner = JSON.parse(await getHeroBanner());
  const about = JSON.parse(await getAbout());
  const services = JSON.parse(await getServices());
  const projects = JSON.parse(await getProjects());
  const testimonials = JSON.parse(await getTestimonials());
  const news = JSON.parse(await getNews());
  const contact = JSON.parse(await getContact());
  const footer = JSON.parse(await getFooter());

  if (!navMenuList) {
    return {
      notFound: true,
    };
  }
  if (!heroBanner) {
    return {
      notFound: true,
    };
  }
  if (!about) {
    return {
      notFound: true,
    };
  }
  if (!services) {
    return {
      notFound: true,
    };
  }
  if (!projects) {
    return {
      notFound: true,
    };
  }
  if (!testimonials) {
    return {
      notFound: true,
    };
  }
  if (!news) {
    return {
      notFound: true,
    };
  }
  if (!contact) {
    return {
      notFound: true,
    };
  }
  if (!footer) {
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
};

export default Home;
