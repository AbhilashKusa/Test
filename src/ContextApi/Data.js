import React, { useState, createContext} from "react";
import green from "../images/green.jpg";
import resort from "../images/resort.jpg";
import water from "../images/water.jpg";
import coco from "../images/coco.jpg";

export const Data = createContext();
export function DataProvider(props) {
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

  return (
    <div>
      <Data.Provider value={[data, setdata]}>{props.children}</Data.Provider>
    </div>
  );
}
