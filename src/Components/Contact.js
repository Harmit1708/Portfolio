import React from "react";

function Contact() {
  return (
    <div className="contact " id="Contact">
      <div className="contact-info m-auto">
        <h1 className="text-center contactme">Contact Me</h1>
        <p className="text-center text-muted lead">Get In Touch</p>
        <h4 className="text-light lead">Happy to connect via mail...</h4>
        <div className="d-flex justify-content-center p-4">
        <a className="" href="mailto:Harmitsonani@gmail.com">
          <button className="btn  btn-outline-success">Say Hello</button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
