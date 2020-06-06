import React, { useRef } from "react";
import { TweenMax, SteppedEase } from "gsap";
import mainpageimg from "../images/mainpageimg.png";

const Mainpage = () => {
  async function MainDetails() {
    TweenMax.to("#Main-details", 2, {
      opacity: 1,
      y: -20,
      ease: SteppedEase.easeIn,
    });
    return null;
    TweenMax.to("#about", 4, {
      opacity: 1,
      y: -20,
      ease: SteppedEase.easeIn,
    });
    return null;
  }
  return (
    <div>
      <section>
        <div className="container ">
          <div
            className="image"
            style={{
              backgroundImage: { mainpageimg },
              backgroundRepeat: "no-repeat",
              width: "auto",
              height: "600px",
              color: "white",
            }}
          >
            <div className="mainpage">
              <div className="heading" id="Main-details" ref={MainDetails}>
                {" "}
                <b>
                  {" "}
                  THE BEST HOTEL
                  <br /> YOUEVER NEED
                </b>
                <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam incidunt
                  <br /> odit mollitia maiores, veritatis quae? Lorem ipsum
                  dolor sit amet <br />
                  consectetur, adipisicing elit. Expedita, amet.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
