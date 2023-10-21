import React from "react";
import "/src/App.css";

function Services() {
  return (
    <div className="services">
      <div className="services-filler">
        <img className="service-photo" src={`/food1.png`} />
      </div>
      <div className="services-filler">
        <img className="service-photo" src={`/food2.png`} />
      </div>
      <div className="services-filler">
        <img className="service-photo" src={`/food3.png`} />
      </div>
      <div className="services-filler">
        <img className="service-photo" src={`/food4.png`} />
      </div>
    </div>
  );
}

export default Services;
