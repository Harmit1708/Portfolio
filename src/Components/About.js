import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Resume from "../Files/Harmit_Sonani.pdf";

function About() {
  return (
    <div className="container-fluid about" id="about">
      <div className="m-auto w-50">
        <div className="grid">
          <h1 className="display-6">About me</h1>
          <hr style={{ width: "500px" }} />
        </div>
        <h3 className="lead">Hy I'm Harmit Sonani</h3>
        <h5 className="lead" style={{ width: "500px" }}>
          I'm a full stack developer. One of my favorite things to do is build
          websites. In a challenging and dynamic environment, I do my work to
          the best of my abilities, enhancing my professional expertise with
          learning and experience for career advancement.
        </h5>
        <a
          className="mt-2 btn btn-outline-primary text-light"
          href={Resume}
          download
          style={{ textDecoration: "none" }}
        >
          Resume
          <FileDownloadIcon />
        </a>
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
