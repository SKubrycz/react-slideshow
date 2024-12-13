import { useState } from "react";

import slide1 from "./assets/slide1.png";
import slide2 from "./assets/slide2.png";
import slide3 from "./assets/slide3.png";
import slide4 from "./assets/slide4.png";
import slide5 from "./assets/slide5.png";

export default function Slide() {
  const [counter, setCounter] = useState(1);
  const reduceCounter = () => setCounter((c) => Math.max(c - 1, 1));
  const increaseCounter = () => setCounter((c) => Math.min(c + 1, 5));

  let text = "";
  let prevgradient = "";
  let nextgradient = "";

  const getSlideImg = (slideNum: number) => {
    switch (slideNum) {
      case 1:
        return slide1;
      case 2:
        return slide2;
      case 3:
        return slide3;
      case 4:
        return slide4;
      case 5:
        return slide5;
    }
  };

  switch (counter) {
    case 1:
      text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
      prevgradient = `linear-gradient(90deg, rgba(15,31,102,0.8) 0%, rgba(0,0,0,0) 100%)`;
      nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(15,31,102,0.8) 100%)`;
      break;
    case 2:
      text = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`;
      prevgradient = `linear-gradient(90deg, rgba(103,27,196, 0.8) 0%, rgba(0,0,0,0) 100%)`;
      nextgradient = `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(103,27,196, 0.8) 100%)`;
      break;
    case 3:
      text = `Contrary to popular belief, Lorem Ipsum is not simply random text.`;
      prevgradient = `linear-gradient(90deg, rgba(82, 3, 72,0.8) 0%, rgba(0,0,0,0) 100%)`;
      nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(82, 3, 72,0.8) 100%)`;
      break;
    case 4:
      text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`;
      prevgradient = `linear-gradient(90deg, rgba(2, 50, 64,0.8) 0%, rgba(0,0,0,0) 100%)`;
      nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(2, 50, 64,0.8) 100%)`;
      break;
    case 5:
      text = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
      prevgradient = `linear-gradient(90deg, rgba(0, 77, 48,0.8) 0%, rgba(0,0,0,0) 100%)`;
      nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0, 77, 48,0.8) 100%)`;
      break;
    default:
      text = "";
  }

  /* const [color, changeColor] = useState(1);
      const setId = () => changeColor(); */

  const dots = [
    { title: "• ", id: 1 },
    { title: "• ", id: 2 },
    { title: "• ", id: 3 },
    { title: "• ", id: 4 },
    { title: "•", id: 5 },
  ];

  const highlightDot = dots.map((dot) => (
    <div
      key={dot.id}
      style={{
        color: dot.id === counter ? "black" : "#d9e6fc",
      }}
    >
      {dot.title}
    </div>
  ));
  return (
    <>
      <img
        src={getSlideImg(counter)}
        alt={`slide${counter}`}
        className="img-class"
      />
      <button className="prev" onClick={reduceCounter}>
        {"<"}
      </button>
      <button className="next" onClick={increaseCounter}>
        {">"}
      </button>
      <div className="dots">{highlightDot}</div>
      <div>Counter: {`\n${counter}`}</div>
      <pre>
        <div className="desc">
          {`slide no.${counter} desc: \n\n`}
          {text}
        </div>
      </pre>
    </>
  );
}
