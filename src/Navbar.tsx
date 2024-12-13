import { useState } from "react";

export default function Navbar() {
  const [font, setStyle] = useState("italic");
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
        <header onClick={changeStyle} style={{ fontStyle: `${font}` }}>
          Slideshow
        </header>
      </nav>
    </>
  );
}
