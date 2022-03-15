import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function About() {
  return (
    <div className="container-fluid about" id="about">
      <div className="m-auto w-50">
        <div className="grid">
          <h1 className="display-6">About me</h1>
          <a
            href="https://www.linkedin.com/in/harmit-sonani
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn mr-2 btn-outline-secondary">
              <LinkedInIcon className="text-light" />
              &nbsp;Linkdin
            </button>
          </a>
          <a
            href="https://github.com/Harmit1708"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline-secondary">
              <GitHubIcon className="text-light" />
              &nbsp;Github
            </button>
          </a>
          <hr />
        </div>
        <h3 className="lead">Hy I'm Harmit Sonani</h3>
        <h5 className="lead">
        I'm a full stack developer. One of my favorite things to do is build websites. 
        In a challenging and dynamic environment, I do my work to the best of my abilities, 
        enhancing my professional expertise with learning and experience for career advancement.
        </h5>
        <hr />
        <h5 className="lead">
          Here's a few technologies I'have work with all technologies:
        </h5>
        <ul className="icons lead unstyled" type="none">
          <li>
            <img
              src="https://img.icons8.com/color/50/000000/html-5--v1.png"
              alt=""
            />
            &nbsp;HTML
          </li>
          <li>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="" />
            &nbsp;CSS
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              alt=""
            />
            &nbsp;Bootstrap
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt=""
            />
            &nbsp;JavaScript
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt=""
            />
            &nbsp;ReactJS
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/mysql-logo.png"
              alt=""
            />
            &nbsp;MySql
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt=""
            />
            &nbsp;MongoDb
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt=""
            />
            &nbsp;Node js
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
              alt=""
            />
            &nbsp;AWS
          </li>
        </ul>
      </div>
      <div className="mt-auto mb-auto">
        <img
          className="image rounded-circle"
          src="https://content.techgig.com/thumb/msid-74548080,width-860,resizemode-4/4-essential-skills-every-NET-developer-must-possess.jpg?67629"
          alt="about"
        />
      </div>
    </div>
  );
}

export default About;
