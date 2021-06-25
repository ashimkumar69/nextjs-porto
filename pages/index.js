// react
import { Fragment } from "react";

// import
import HeroBanner from "../components/heroBanner/heroBanner";
import About from "../components/about/about";
import Services from "../components/services/services";
import Projects from "../components/projects/projects";
import Testimonials from "../components/testimonials/testimonials";
import News from "../components/news/news";
import Contact from "../components/contact/contact";

export default function Home() {
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
