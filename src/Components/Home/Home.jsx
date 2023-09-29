import React, { Fragment } from "react";
import Hero from "./Hero";
import Clients from "./Clients";
import Community from "./Community";

function Home() {
  return (
    <Fragment>
      <Hero />
      <Clients />
      <Community />
    </Fragment>
  );
}

export default Home;
