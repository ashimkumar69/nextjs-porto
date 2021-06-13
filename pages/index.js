// material
import Button from "@material-ui/core/Button";
import { Fragment } from "react";

// import
import HeroBanner from "../components/hero-banner/hero-banner";

export default function Home() {
  return (
    <Fragment>
      <HeroBanner />
      <h2>Portfolio</h2>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Fragment>
  );
}
