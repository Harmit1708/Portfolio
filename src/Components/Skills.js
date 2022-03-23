import React from "react";

function Skills() {
  return (
    <div className="container Skills" id="skills">
      <div className="m-auto w-100">
        <h1 className="text-center">Skills</h1>
        <p className="text-center">My Technical Skills</p>
          <div className="skill col-lg-12">
            <div  className="mt-4  col-lg-6" >
              <p><img src="https://img.icons8.com/color/50/000000/html-5--v1.png" alt="Html"/>&nbsp;HTML</p>
              <span className="progress">
                <div
                  className="progress-bar One progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/css3.png" alt="Html"/>&nbsp;CSS</p>
              <span className="progress">
                <div
                  className="progress-bar two progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="Html"/>&nbsp;JavaScript</p>
              <span className="progress">
                <div
                  className="progress-bar four progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/react-native.png" alt="Html"/>&nbsp;ReactJS</p>
              <span className="progress">
                <div
                  className="progress-bar five progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
            </div>
            <div className="mt-4 col-lg-6">
              <p><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Html"/>&nbsp;NodeJs</p>
              <span className="progress">
                <div
                  className="progress-bar six progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="Html"/>&nbsp;MongoDB</p>
              <span className="progress">
                <div
                  className="progress-bar eight progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="Html"/>&nbsp;Mysql</p>
              <span className="progress">
                <div
                  className="progress-bar nine progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="Html"/>&nbsp;AWS</p>
              <span className="progress">
                <div
                  className="progress-bar ten progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
