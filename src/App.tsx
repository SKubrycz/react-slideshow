import { useEffect } from "react";

import "./App.css";

import Navbar from "./Navbar";
import Slide from "./Slide";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    document.title = "Slideshow";
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <article id="slideshow">
        <Slide />
      </article>
      <Footer></Footer>
    </>
  );
};
export default App;
