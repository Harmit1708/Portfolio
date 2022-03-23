import React from "react";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Mypic from "../Images/IMG_8932-01.jpeg";

function Home() {
  return (
    <>
      <div className="area" id="Home">
      <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> 
            </ul>
        <div className="home container-fluid">
          <div className="my-pic m-auto">
            <img
              className="img-fluid  card-img-top"
              src={Mypic}
              alt="harmit"
            ></img>
          </div>
          <div className="text lead m-auto">
            <p className="text-light">Hi, My name is</p>
            <h3 className="text-light display-3">Harmit Sonani.</h3>
            <p className="text-muted display-6">Full Stack Developer.</p>
            <p className="text-light text-wrap">
              My profession is that of an Indian Full Stack Developer.<br></br>
              Full Stack Developers work on both the front and back ends of web
              applications.
            </p>
          </div>
        </div>
        <br></br>
      </div>
      <About />
      <Skills/>
      <Work/>
      <Contact/>
    </>
  );
}

export default Home;
