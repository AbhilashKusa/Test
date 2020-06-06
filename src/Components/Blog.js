import React, { useState } from "react";
import green from "../images/green.jpg";
import resort from "../images/resort.jpg";
import water from "../images/water.jpg";
import coco from "../images/coco.jpg";

import useInfiniteScroll from "../Helpers/useInfiniteScroll";
export default function Blog() {
  const [data, setdata] = useState([
    {
      image: { green },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { coco },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { water },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { water },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { coco },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { resort },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { green },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { coco },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { resort },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { water },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { green },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { coco },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { resort },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { water },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { green },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { coco },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
    {
      image: { resort },
      About:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, beatae. ",
    },
  ]);
  const [listItems, setListItems] = useState(data.slice(0, 6));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(data.slice(5, 11)),
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <div className="container">
        <div className="cardetails">
          {listItems.map((e, i) => (
            <div className="card " id="cardstyle" key={Math.random()}>
              <img
                className="card-img-top"
                src={
                  e.image.coco ||
                  e.image.resort ||
                  e.image.coco ||
                  e.image.green ||
                  e.image.water
                }
                key={i}
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isFetching && "Fetching more list items..."}
    </>
  );
}
