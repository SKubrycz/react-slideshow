import { useState, useEffect, useRef } from "react";

import slide1 from "./assets/slide1.png";
import slide2 from "./assets/slide2.png";
import slide3 from "./assets/slide3.png";
import slide4 from "./assets/slide4.png";
import slide5 from "./assets/slide5.png";

interface Position {
  top: number;
  right: number;
  bottom: number;
  left: number;
  zIndex: number;
}

interface Image {
  id: number;
  img: string;
  scale: number;
  position: Position;
}

const MAX_SLIDES = 5;

export default function Slide() {
  const [counter, setCounter] = useState(1);
  const reduceCounter = () => setCounter((c) => Math.max(c - 1, 1));
  const increaseCounter = () => setCounter((c) => Math.min(c + 1, MAX_SLIDES));
  const [images, setImages] = useState<Image[]>([
    {
      id: 1,
      img: slide1,
      scale: 100,
      position: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
      },
    },
    {
      id: 2,
      img: slide2,
      scale: 100,
      position: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
      },
    },
    {
      id: 3,
      img: slide3,
      scale: 100,
      position: { top: 0, right: 0, bottom: 0, left: 0, zIndex: 0 },
    },
    {
      id: 4,
      img: slide4,
      scale: 100,
      position: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
      },
    },
    {
      id: 5,
      img: slide5,
      scale: 100,
      position: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
      },
    },
  ]);

  const imgContainerRef = useRef<HTMLDivElement | null>(null);

  let text = "";
  let prevgradient = "";
  let nextgradient = "";

  const calculateImages = () => {
    const updatedImages = images.map((el, i) => {
      const scale = 100 - Math.abs((el.id - counter) * 50);
      let position: Position = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      };
      if (imgContainerRef && imgContainerRef?.current) {
        position = {
          top: imgContainerRef.current?.clientHeight / 2 - 230 / 2,
          left:
            imgContainerRef.current?.clientWidth / 2 +
            (el.id - counter - 1) * 200,
          right: 0,
          bottom: imgContainerRef.current?.clientHeight / 2 - 220,
          zIndex: -Math.abs(counter - el.id) + MAX_SLIDES,
        };
      }

      return { id: el.id, img: el.img, scale: scale, position: position };
    });

    setImages(updatedImages);
  };

  useEffect(() => {
    calculateImages();
  }, [counter]);

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
      className="dot"
      onClick={() => setCounter(dot.id)}
      style={{
        color: dot.id === counter ? "darkblue" : "#ccdfff",
      }}
    >
      {dot.title}
    </div>
  ));
  return (
    <div className="slide-container">
      <article id="slideshow">
        <div ref={imgContainerRef} className="img-container">
          {images.map((el, i) => {
            return (
              <img
                key={i}
                src={el.img}
                alt={`slide${counter}`}
                className="img-class"
                style={{
                  top: `${el.position.top}px`,
                  left: `${el.position.left}px`,
                  transform: `scale(${el.scale}%)`,
                  zIndex: `${el.position.zIndex}`,
                }}
              />
            );
          })}
        </div>
        <button className="prev" onClick={reduceCounter}>
          {"<"}
        </button>
        <button className="next" onClick={increaseCounter}>
          {">"}
        </button>
        <div className="dots">{highlightDot}</div>
      </article>
      <article id="other">
        <div>Counter: {`\n${counter}`}</div>
        <div className="desc" style={{fontSize: (text.length > 200) ? "16px" : "20px"}}>
          {`slide no.${counter} desc: \n\n`}
          {(text.length > 200) ? text.slice(0, 200) + "..." : text}
        </div>
      </article>
    </div>
  );
}
