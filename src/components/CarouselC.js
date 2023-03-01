import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarouselC.css";

import ui_ux_svg from "../assets/ui-ux.svg";
import web_design_svg from "../assets/web-desgin.svg";
import app_design_svg from "../assets/app-desgin.svg";

function CarouselC() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        draggable={true}
      >
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-1">
              <img src={ui_ux_svg} alt="service" />
            </span>
            <h4>UI/UX Design</h4>
            <p>
              Create visually stunning and intuitive UI/UX designs tailored to
              your target audience
            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-2">
              <img src={web_design_svg} alt="service" />
            </span>
            <h4>Web Design</h4>
            <p>
              Offer comprehensive web design services that combine
              functionality, aesthetics, and user experience
            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-3">
              <img src={app_design_svg} alt="service" />
            </span>
            <h4>App Development</h4>
            <p>
              Developing apps for both iOS and Android platforms, using the
              latest technologies and frameworks to create fast, responsive, and
              intuitive apps
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselC;
