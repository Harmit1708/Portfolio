import React from "react";
import ExpressJs from "../Images/express.png";
import Mongodb from "../Images/mongodb.png";

import Healthcare from '../Images/online-shopping (1).png';
import Rent from '../Images/for-rent (1).png';
import Gmail from '../Images/gmail (1).png';
import Music from '../Images/musical-notes.png';

function Work() {
  return (
    <div className="work" id="Work">
      <div className="m-auto">
        <h1 className="text-center text-white">Some Things I've Built</h1>
        <p className="text-center text-muted">Most recent works</p>
        <div className="working mt-5 align-items-center">
          <div
            className="structure"
            style={{ backgroundColor: "white", color: "black",borderRadius:"20px" }}
          >
            <div>
              <img
                className="d-flex mt-5"
                src={Healthcare}
                alt=""
                style={{ height: "180px", width: "180px", margin: "auto" }}
              ></img>
              <h4 className="text-center mt-4">Healthcare</h4>
              <br></br>
              <div className="text-center mt-2">
                <h5 className="text-center text-wrap ">Technologies</h5>
                <br></br>
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={Mongodb}
                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
              <br></br>
              <div className="text-center mt-4">
                <a href="https://github.com/Harmit1708/Healthcare-frontend" target="_blank" rel="noopener noreferrer" className="mr-3 btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  FrontEnd
                </a>
                <a href="https://github.com/Harmit1708/Healthcare-backend" target="_blank" rel="noopener noreferrer" className="mr-3 btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  Backend
                </a>
                <a href="https://623ab9266cc601000815d380--healthcare-products.netlify.app/"  target="_blank" rel="noopener noreferrer" className="btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div
            className="structure"
            style={{ backgroundColor: "white", color: "black",borderRadius:"20px"  }}
          >
            <div>
              <img
                className="d-flex mt-5"
                src={Rent}
                alt=""
                style={{ height: "180px", width: "180px", margin: "auto" }}
              ></img>
              <h4 className="text-center mt-4">Rental</h4>
              <br></br>
              <div className="text-center mt-2">
                <h5 className="text-center text-wrap ">Technologies</h5>
                <br></br>
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={Mongodb}                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
              <br></br>
              <div className="text-center mt-4">
                <a href="https://github.com/Harmit1708/Rental-frontend" target="_blank" rel="noopener noreferrer" className="mr-3 btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  FrontEnd
                </a>
                <a href="https://github.com/Harmit1708/Rental-backend" target="_blank" rel="noopener noreferrer"  className="mr-3 btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  Backend
                </a>
                <a href="https://623ac02afdc3d971f4c9bf15--rental-prod.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  Demo
                </a>
              </div>
            </div>
          </div>

          <div
            className="structure"
            style={{ backgroundColor: "white", color: "black",borderRadius:"20px"  }}
          >
            <div>
              <img
                className="d-flex mt-5"
                src={Gmail}
                alt=""
                style={{ height: "180px", width: "180px", margin: "auto" }}
              ></img>
              <h4 className="text-center mt-4">Gmail Clone</h4>
              <br></br>
              <div className="text-center mt-2">
                <h5 className="text-center text-wrap ">Technologies</h5>
                <br></br>
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={Mongodb}                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
              <br></br>
              <div className="text-center mt-4">
                <a href="https://github.com/Harmit1708/Gmailclone-frontend" target="_blank" rel="noopener noreferrer" className="mr-3 btn shadow-none  workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  FrontEnd
                </a>
                <a href="https://github.com/Harmit1708/Gmailclone-backend" target="_blank" rel="noopener noreferrer" className="mr-3 btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  Backend
                </a>
                <a href="https://623ac2bd411005701f61ba68--gmail-clone-app.netlify.app/"  target="_blank" rel="noopener noreferrer" className="btn shadow-none workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div
            className="structure"
            style={{ backgroundColor: "white", color: "black",borderRadius:"20px"  }}
          >
            <div>
              <img
                className="d-flex mt-5"
                src={Music}
                alt=""
                style={{ height: "180px", width: "180px", margin: "auto" }}
              ></img>
              <h4 className="text-center mt-4">Beat With Music</h4>
              <br></br>
              <div className="text-center mt-2">
                <h5 className="text-center text-wrap ">Technologies</h5>
                <br></br>
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="react"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="node"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={Mongodb}                  alt="mongodb"
                  style={{ height: "48px", width: "48px" }}
                ></img>
                <img
                  className="ml-1"
                  src={ExpressJs}
                  alt="express"
                  style={{ height: "48px", width: "68px" }}
                ></img>
                <img
                  className="ml-1"
                  src="https://mui.com/static/logo.png"
                  alt="mui"
                  style={{ height: "48px", width: "48px" }}
                ></img>
              </div>
              <br></br>
              <div className="text-center align-center mt-4">
                <a href="https://github.com/Harmit1708/Beatwithmusic-frontend" target="_blank" rel="noopener noreferrer" className="mr-3 btn shadow-none text-black workbtnHover" style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  FrontEnd
                </a>
                <a href="https://github.com/Harmit1708/Beatwithmusic-backend" target="_blank" rel="noopener noreferrer" className="mr-3 btn shadow-none workbtnHover"  style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}>
                  Backend
                </a>
                <a href="https://623ac5a4e896be0282d265ec--beatwithmusic.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn shadow-none workbtnHover"  style={{height:"40px",width:"90px",borderRadius:"25px",color:"white"}}  >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
