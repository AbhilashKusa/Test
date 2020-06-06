import React from "react";
import resort from "../images/resort.jpg";
import water from "../images/water.jpg";
import coco from "../images/coco.jpg";

export default function About() {
  return (
    <div>
      <section className="h-100">
        <div className="container" id="about">
          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <b>
                <h3 className="mt-5 font-weight-bolder text-white">About us</h3>
              </b>
              <br />
              <h2 className="p-4 text-white">
                Trust and quality are our atuus
              </h2>
              <button className="btn btn-primary m-3">Explore</button>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium quod neque rerum impedit dignissimos eligendi
                voluptatibus unde esse nam veniam est, eveniet
                temporibus,voluptatibus unde esse nam veniam est,
                evenietvoluptatibus unde esse nam veniam est, eveniet
                temporibus, temporibus, excepturi distinctio. Porro accusamus
                velit eius accusantium.
              </p>
            </div>
            <div className="col p-4">
              <div className="about-grid">
                <div>
                  {" "}
                  <img src={resort} alt="resort" height="250px" width="250px" />
                </div>
                <div>
                  {" "}
                  <img src={water} alt="resort" height="250px" width="250px" />
                </div>
                <div className="div1">
                  {" "}
                  <img src={coco} alt="resort" height="250px" width="250px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
