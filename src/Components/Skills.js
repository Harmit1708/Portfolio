import React from 'react';

function Skills() {
  return (
    <div className="container-fluid Skills" id="skills">
      <div className="m-auto w-100">
        <h1 className="text-center">Skills</h1>
        <p className="text-center">My Technical Skills</p>
        <div className=" w-50 mx-auto">
        <p>HTML</p>
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
          <p>CSS</p>
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
          <p>Bootstrap</p>
          <span class="progress">
            <div
              class="progress-bar three progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </span>
          <br />
          <p>JavaScript</p>
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
          <p>ReactJS</p>
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
      </div>
    </div>
  );
}

export default Skills;
