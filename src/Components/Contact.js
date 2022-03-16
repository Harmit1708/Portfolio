import React from "react";
import Contact_me from '../Images/contact_me.jpg'


function Contact() {

  let handleSubmit = () =>{

  }
  
  return (
    <div className="contact" id="Contact">
      <div className="contact-info m-auto">
        <h1 className="text-center contactme">Contact Me</h1>
        <p className="text-center text-muted lead">Get In Touch</p>
        <div className="d-flex mt-5 justify-content-center flex-row" style={{gap: "10%"}}>
        <div ><img src={Contact_me} alt="contactme" style={{height: "350px",width: "450px",borderRadius: "15px"}}></img></div>
        <div className=" d-flex m-auto flex-column" style={{justifyContent:"center",alignItems: "center"}}>
          <h3 className="mb-4">Say Hi!</h3>
          <form>
          <input className="form-control" style={{width: "450px"}} type="text" placeholder="Enter Your Name" required></input><br></br>

          <input className="form-control" style={{width: "450px"}} type="email" placeholder="Enter Your Email" required></input><br></br>

          <input className="form-control" style={{width: "450px"}} type="textarea" placeholder="Enter Message" required></input>

          <button className="btn mt-4 btn-success text-white text-center" onClick={()=>{handleSubmit()}} style={{width: "450px"}} required>Send<img src="https://img.icons8.com/fluency/344/filled-sent.png" alt="Send" style={{marginLeft:"5px",height:"24px",width:"24px",color:"white"}}></img></button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;