import React from "react";
import "./home.scss";
import HeroSlider from "../../components/Slider/HeroSlider";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
    </>
  );
};

export default Home;
