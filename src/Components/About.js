import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Resume from "../Files/Harmit_Sonani.pdf";

function About() {
  return (
    <div className="about" id="about">
      <div className="m-auto">
        <div className="m-auto about-content">
          <h1 className="display-6">About me</h1>
          <hr style={{ maxWidth: "500px" }} />
          <h3 className="lead" style={{fontSize: "23px"}}>Hy I'm Harmit Sonani</h3>
          <h5 className="lead  text-wrap" style={{ maxWidth: "500px",fontSize: "25px"}}>
            I'm a full stack developer. One of my favorite things to do is build
            websites. In a challenging and dynamic environment, I do my work to
            the best of my abilities, enhancing my professional expertise with
            learning and experience for career advancement.
          </h5>
          <a
            className="mt-2 btn text-light btnHover"
            target="_blank" rel="noopener noreferrer"
            href={Resume}
            download
            style={{ textDecoration: "none",border:"3.5px solid #023b59" }}
          >
            Resume
            <FileDownloadIcon />
          </a>
        </div>
      </div>
      <div className="m-auto">
        <img
          className="about-image about-image d-flex justify-content-center"
          style={{ Width: "450px", height: "350px",borderRadius: "50%"}}
          src="https://content.techgig.com/thumb/msid-74548080,width-860,resizemode-4/4-essential-skills-every-NET-developer-must-possess.jpg?67629"
          alt="about"
        />
      </div>
    </div>
  );
}

export default About;
