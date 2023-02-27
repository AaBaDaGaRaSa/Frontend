import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";

import sliderDetails from "../Data/slider";
import "./heroslider.scss";

const HeroSlider = () => {
  return (
    <section>
      <Container>
        <Slider>
          {sliderDetails.map((item) => (
            <>
              <div className="slider-container d-flex align-items-center justify-content-between pt-5">
                <div className="slider-items w-25 ps-2">
                  <h2 className="mb-3">{item.name}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">View Menu</button>
                </div>

                <div className="slider-image w-50">
                  <img src={item.image} alt="taco" className="w-100" />
                </div>
              </div>
            </>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
