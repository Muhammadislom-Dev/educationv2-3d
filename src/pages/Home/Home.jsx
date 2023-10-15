import React from "react";
import Company from "./../../components/moleculas/Company";
import Rating from "./../../components/moleculas/Rating";
import Articles from "./../../components/moleculas/Articles";
import Contact from "./../../components/moleculas/Contact";
import Category from "../../components/moleculas/Category";
import Collection from "../../components/moleculas/Collection";

function Home() {
  return (
    <>
      <Category />
      <Company />
      <Rating />
      <Collection />
      <Articles />
      <Contact />
    </>
  );
}

export default Home;
