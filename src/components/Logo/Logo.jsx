import React from "react";
import "./logo.scss";
import TacoTown from "../assets/tacotown.png";

const Logo = () => {
  return (
    <div className="logo d-flex align-items-center gap-1">
      <div>
        <img src={TacoTown} alt="taco-town" />
        <span>
          <b>
            Taco<b className="town">Town</b>
          </b>
        </span>
      </div>
      <p>
        <b>The best taco in town</b>
      </p>
    </div>
  );
};

export default Logo;
