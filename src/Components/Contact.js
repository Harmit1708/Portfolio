import React from "react";
import Contact_me from "../Images/contact_me.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "emailjs-com";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bw9cdco",
        "template_dpndk99",
        e.target,
        "yBOTZXaKU9hsb1Ixw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Message sent successfully");
    e.target.reset();
  }

  return (
    <div className="contact" id="Contact">
      <div className="m-auto">
        <h1 className="text-center">Contact Me</h1>
        <p className="text-center text-muted lead">Get In Touch</p>
        <div className="mt-5 contact-me" style={{ gap: "10%" }}>
          <div>
            <img
              className="img-fluid contact-image"
              src={Contact_me}
              alt="contactme"
              style={{ height: "350px", width: "450px", borderRadius: "15px" }}
            ></img>
          </div>
          <div>
            <h3 className="mb-3 hy-msg">Say Hi!</h3>
            <form onSubmit={sendEmail} className="form-set">
              <input
                className="form-control form-set"
                style={{ width: "450px" }}
                type="text"
                placeholder="Enter Your Name"
                required
                name="name"
              />
              <br></br>
              <input
                className="form-control form-set"
                style={{ width: "450px" }}
                type="email"
                placeholder="Enter Your Email"
                required
                name="email"
              />
              <br></br>

              <input
                className="form-control form-set"
                style={{ width: "450px" }}
                type="textarea"
                placeholder="Enter Message"
                required
                name="message"
              />

              <input
                type="submit"
                className="btn form-set mt-4 btnHover text-white text-center shadow-none"
                style={{ width: "450px",border:"3.5px solid #023b59"  }}
                required
                value="Send Messsage"
              />
              <br></br>
            </form>
            <div className="buttons-query">
              <a
                href="https://www.linkedin.com/in/harmit-sonani"
                target="_blank"
                rel="noopener noreferrer"
                className="linkdin"
              >
                <button className="btn mt-4 btnHover mr-2 text-white" style={{border:"3.5px solid #023b59" }}>
                  <LinkedInIcon className="text-white linkdin" />
                  &nbsp;Linkdin
                </button>
              </a>
              &nbsp;&nbsp;
              <a
                href="https://github.com/Harmit1708"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn mt-4 btnHover mr-2 text-white" style={{border:"3.5px solid #023b59" }}>
                  <GitHubIcon className="text-white" />
                  &nbsp;Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
