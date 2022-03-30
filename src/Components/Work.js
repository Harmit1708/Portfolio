import React from "react";
import ExpressJs from "../Images/express.png";
import Mongodb from "../Images/mongodb.png";

import Healthcare from "../Images/HealtCare.png";
import Rent from "../Images/rent.png";
import Gmail from "../Images/gmail.png";
import Music from "../Images/beatwithmusic.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from '@mui/icons-material/Language';
function Work() {
  return (
    <div className="work" id="Work">
      <div className="m-auto">
        <h1 className="text-center text-white">Some Things I've Built</h1>
        <p className="text-center text-muted">Most recent works</p>
        <div className="working mt-5 align-items-center">
          <div
            className="structure"
            id="run"
            style={{ backgroundColor: "white", color: "black",borderRadius:"10px" }}
          >
            <div>
              <img
                className="d-flex img-fluid"
                src={Healthcare}
                alt=""
                style={{ height: "300px", width: "100%", margin: "0 auto" ,borderRadius:"10px"}}
              ></img>
              <div className="m-2">
              <h4 className="ml-2 mt-1">Healthcare (Full Stack)</h4>
              <p className="ml-2">
                A healthcare products website has all the features a possible
                e-commerce website needs, including the ability to add products
                to cart, accept payments with G-Pay and Razorpay, provide the
                login flow, and show products by category. It is a very
                straightforward website
              </p>
              <br></br>
              <div className="text-center">
                <a
                  href="https://github.com/Harmit1708/Healthcare-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2 btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;FrontEnd
                </a>
                <a
                  href="https://github.com/Harmit1708/Healthcare-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2 btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;Backend
                </a>
                <a
                  href="https://healthcare-products.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn p-2 fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <LanguageIcon/>&nbsp;Demo
                </a>
              </div>
              <br></br>
              <div className="text-center">
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={Mongodb}
                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
              </div>
            </div>
          </div>
          <div
            className="structure"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                className="d-flex"
                src={Rent}
                alt=""
                style={{ height: "300px", width: "100%", margin: "auto",borderRadius:"10px" }}
              ></img>
              <div className="m-2">

              <h4 className="ml-2 mt-1">Rental (Full Stack)</h4>
              <p className="ml-2">The website allows the customer to
rent the product of his choice by
inserting the product into the cart,
paying online, and picking up the
product at our location
</p>
              <br></br>
              <br></br>
              <div className="text-center">
                <a
                  href="https://github.com/Harmit1708/Rental-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2  btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;FrontEnd
                </a>
                <a
                  href="https://github.com/Harmit1708/Rental-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2  btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;Backend
                </a>
                <a
                  href="https://rental-prod.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2  btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                   <LanguageIcon/>&nbsp;Demo
                </a>
              </div>
              <div className="text-center">
                <br></br>
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={Mongodb}
                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
            </div>
              </div>
          </div>

          <div
            className="structure"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                className="d-flex "
                src={Gmail}
                alt=""
                style={{ height: "300px", width: "100%", margin: "auto",borderRadius:"10px" }}
              ></img>
              <div className="m-2">

              <h4 className="ml-2 mt-1">Gmail Clone (Full Stack)</h4>
              <p className="ml-2">Gmail clone app is having all the
necessary features like user can
send the mail to another user.
deleting the mail and adding the
favorite mail as well as login system
also</p>
              <br></br>
              
              <br></br>
              <div className="text-center">
                <a
                  href="https://github.com/Harmit1708/Gmailclone-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2  btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;FrontEnd
                </a>
                <a
                  href="https://github.com/Harmit1708/Gmailclone-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2  btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;Backend
                </a>
                <a
                  href="https://gmail-clone-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2  btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <LanguageIcon/>&nbsp;Demo
                </a>
              </div>
              <div className="text-center">
                <br></br>
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={Mongodb}
                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
              </div>
            </div>
          </div>
          <div
            className="structure"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px"
            }}
          >
            <div>
              <img
                className="d-flex"
                src={Music}
                alt=""
                style={{ height: "300px", width: "100%", margin: "auto" ,
              borderRadius: "10px"}}
              ></img>
              <div className="m-2">

              <h4 className="ml-2 mt-1 ">Beat With Music (Full Stack)</h4>
              <p className="ml-2">beat with the song is an
entertainment website users can
listening favorite songs and take an
enjoyment
</p>
              <br></br>
              <div className="text-center align-center mt-4">
                <a
                  href="https://github.com/Harmit1708/Beatwithmusic-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2  btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;FrontEnd
                </a>
                <a
                  href="https://github.com/Harmit1708/Beatwithmusic-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 p-2 btn fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <GitHubIcon/>&nbsp;Backend
                </a>
                <a
                  href="https://beatwithmusic.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn p-2 fw-bold shadow-none workbtnHover"
                  style={{
                    fontSize:"20px",
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <LanguageIcon/>&nbsp;Demo
                </a>
              </div>
              <div className="text-center">
                <br></br>
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={Mongodb}
                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-2"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-2"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
