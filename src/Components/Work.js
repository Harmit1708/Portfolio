import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Music from '../MainImages/Screenshot (156).png'
import Healthcare from '../MainImages/Screenshot (157).png'
import Rental from '../MainImages/Screenshot (162).png'
import PortFolio from '../MainImages/Screenshot (163).png'
import {Link} from 'react-router-dom'
function Work() {
  return (
    <div className="container-fluid work" id="Work">
      <div className="work-info m-auto">
        <h1 className="text-center">Some Things I've Built</h1>
        <p className="text-center text-muted">Most recent works</p>
        <div className="working mt-auto bg-dark m-3 p-5 d-flex justify-content-center flex-wrap">
          <div className="d-flex" style={{flexDirection:"column"}}>
            <img className="proj" src={Music} alt="placeholder" style={{height:"250px",width:"300px",marginRight:"20px"}}></img>
            <p className="text-center mt-3">Beat With Music</p>
            <div className="d-flex justify-content-center">
              <Link to="https://github.com/Harmit1708/beatwithmusic" target="_blank">
                <a href="https://github.com/Harmit1708/beatwithmusic" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
              </Link>
              <Link to="https://beatwithmusic1.herokuapp.com/" target="_blank">
              <a href="https://beatwithmusic1.herokuapp.com/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
              </Link>
            </div>
          </div>
            <div className="d-flex" style={{flexDirection:"column"}}>
            <img className="proj" src={Healthcare} alt="placeholder" style={{height:"250px",width:"300px",marginRight:"20px"}}></img>
            <p className="text-center mt-3">Healthcare Products</p>
            <div className="d-flex justify-content-center">
              <Link to="https://github.com/Harmit1708/healthcare" target="_blank">
              <a href="https://github.com/Harmit1708/healthcare" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
              </Link>
              <Link to="https://healthcareproducts0.netlify.app/" target="_blank">
              <a href="https://healthcareproducts0.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
              </Link>
            </div>
            </div>
            <div className="d-flex mt-5" style={{flexDirection:"column"}}>
            <img className="proj" src={Rental} alt="placeholder" style={{height:"250px",width:"300px",marginRight:"20px"}}></img>
            <p className="text-center mt-3">Rental Project <br></br><button className="btn btn-secondary mt-2" onClick={()=>{
              alert(`Email : user@gmail.com ,Password : user@123`)
            }}>Demo Credentials</button></p>
            <div className="d-flex justify-content-center">
            <Link to="https://github.com/Harmit1708/RentalProject-front" target="_blank">
              <a href="https://github.com/Harmit1708/RentalProject-front" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white",textDecoration:"none"}}><GitHubIcon/>Front-end</a>
            </Link>
            <Link to="https://github.com/Harmit1708/RentalProject-back" target="_blank">
              <a href="https://github.com/Harmit1708/RentalProject-back" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white",textDecoration:"none"}}><GitHubIcon/>Back-end</a>
            </Link>
            <Link to="https://rental0.netlify.app/" target="_blank">
              <a href="https://rental0.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
            </Link>
            </div>
            </div>
            <div className="d-flex" style={{flexDirection:"column"}}>
            <img className="proj " src={PortFolio} alt="placeholder" style={{height:"250px",width:"300px"}}></img>
            <p className="text-center mt-3">Port Folio</p>
            <div className="d-flex justify-content-center">
            <Link to="" target="_blank">
              <a href="/https://github.com/Harmit1708/Portfolio" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
            </Link>
            <Link to="" target="_blank">
              <a href="https://portfolio1708.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
            </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
