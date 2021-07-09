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
  try {
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
  } catch (error) {
    if (error) {
      return {
        notFound: true,
      };
    }
  }
};

export default Home;
