import React from "react";

function Skills() {
  return (
    <div className="container Skills" id="skills">
      <div className="m-auto w-100">
        <h1 className="text-center">Skills</h1>
        <p className="text-center">My Technical Skills</p>
        <div className="mx-auto">
          <div className="skill">
            <div  className="mt-4" style={{marginRight:"100px"}}>
              <p><img src="https://img.icons8.com/color/50/000000/html-5--v1.png" alt="Html"/>&nbsp;HTML</p>
              <span class="progress">
                <div
                  class="progress-bar One progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/css3.png" alt="Html"/>&nbsp;CSS</p>
              <span class="progress">
                <div
                  class="progress-bar two progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="Html"/>&nbsp;JavaScript</p>
              <span class="progress">
                <div
                  class="progress-bar four progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/react-native.png" alt="Html"/>&nbsp;ReactJS</p>
              <span class="progress">
                <div
                  class="progress-bar five progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
            </div>
            <div className="mt-4 ml-5">
              <p><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Html"/>&nbsp;NodeJs</p>
              <span class="progress">
                <div
                  class="progress-bar six progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="Html"/>&nbsp;MongoDB</p>
              <span class="progress">
                <div
                  class="progress-bar eight progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="Html"/>&nbsp;Mysql</p>
              <span class="progress">
                <div
                  class="progress-bar nine progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
              <br />
              <p><img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="Html"/>&nbsp;AWS</p>
              <span class="progress">
                <div
                  class="progress-bar ten progress-bar-striped progress-bar-animated"
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
    </div>
  );
}

export default Skills;
