// react
import { Fragment } from "react";
// redux
import { useDispatch } from "react-redux";

// store Action
import {
  getNavMenuListAction,
  getHeroBannerAction,
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

function Home(props) {
  const dispatch = useDispatch();
  // navMenuList
  dispatch(getNavMenuListAction(props.navMenuList));
  // heroBanner
  dispatch(getHeroBannerAction(props.heroBanner));
  console.log(props.about);
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
  return {
    props: {
      navMenuList: navMenuList,
      heroBanner: heroBanner,
      about: about,
    },
    revalidate: 10,
  };
};

export default Home;
