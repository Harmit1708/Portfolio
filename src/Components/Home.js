import React from "react";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import MyPic from "../Images/IMG_8932-01.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
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
        <li></li>
      </ul>
      <div className="home container-fluid">
        <div className="m-auto " >
          <img className="card-img-top" src={MyPic} alt="harmit" />
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
          <a
            href="https://www.linkedin.com/in/harmit-sonani"
            target="_blank"
            rel="noopener noreferrer"
            className="linkdin"
          >
            <button className="btn mr-2 btn-outline-secondary">
              <LinkedInIcon className="text-white linkdin" />
              &nbsp;Linkdin
            </button>
          </a>
          <a
            href="https://github.com/Harmit1708"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline-secondary">
              <GitHubIcon className="text-white" />
              &nbsp;Github
            </button>
          </a>
        </div>
      </div>
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
