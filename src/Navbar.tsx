import { useState } from "react";

export default function Navbar() {
  const [font, setStyle] = useState("normal");
  const changeStyle = () => {
    if (font === "italic") {
      setStyle("normal");
    } else {
      setStyle("italic");
    }
  };

  return (
    <>
      <nav className="navbar">
        <header onClick={changeStyle} style={{ fontStyle: `${font}`, cursor: "pointer" }}>
          Slideshow
        </header>
      </nav>
    </>
  );
}
