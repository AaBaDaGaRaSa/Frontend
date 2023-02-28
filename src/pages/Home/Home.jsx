import React from "react";
import "./home.scss";
import HeroSlider from "../../components/Slider/HeroSlider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Footer />
    </>
  );
};

export default Home;
