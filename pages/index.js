// react
import { Fragment } from "react";
// redux
import { useDispatch } from "react-redux";

// store
import { getNavMenuListAction } from "../reduxStore/actions/index";
// import
import HeroBanner from "../components/heroBanner/heroBanner";
import About from "../components/about/about";
import Services from "../components/services/services";
import Projects from "../components/projects/projects";
import Testimonials from "../components/testimonials/testimonials";
import News from "../components/news/news";
import Contact from "../components/contact/contact";
import { getNavMenuList } from "../db/navMenuList";

function Home(props) {
  const dispatch = useDispatch();
  // navMenuList
  dispatch(getNavMenuListAction(props.navMenuList));
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

  if (!navMenuList) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      navMenuList: navMenuList,
    },
    revalidate: 10,
  };
};

export default Home;
