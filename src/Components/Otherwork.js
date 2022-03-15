import React from "react";
import flipkartdummy from '../Images/Screenshot (146).png'
import Anime from '../Images/Screenshot (147).png'
import Calculator from '../Images/Screenshot (148).png'
import Phonedetails from '../Images/Screenshot (149).png'
import Pagination from "../Images/Screenshot (154).png";
import Design from '../Images/Screenshot (151).png'
import Student from '../Images/Screenshot (152).png'
import Movie from '../Images/Screenshot (153).png'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {Carousel} from 'react-bootstrap'
function Otherwork() {
  return (
    <div className="container-fluid otherwork" id="Otherwork">
      <div className="work-info m-auto">
        <h1 className="text-center text-light mb-5">Other Works</h1>
        <div className="otherworking mt-auto bg-dark m-3 p-5 d-flex justify-content-center flex-wrap">
            <Carousel style={{height:"400px",width:"400px"}}>
                <Carousel.Item interval={5000}>
                    <div>
                        <img className="proj" src={flipkartdummy} alt="placeholder" style={{width:"400px",marginBottom:"15px",marginRight:"20px"}}></img><br></br>
                        <p className="text-center">FlipKart Dummy Page</p>
                        <div className="text-center">
                            <a href="https://github.com/Harmit1708/FlipKart-Dummy-" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                            <a href="https://awesome-jennings-8b0817.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div>
                        <img className="proj" src={Anime} alt="placeholder" style={{width:"400px",marginBottom:"15px",marginRight:"20px"}}></img><br></br>
                        <p className="text-center">Anime Api Based </p>
                        <div className="text-center">
                            <a href="https://github.com/Harmit1708/Hackathon-First-Anime-Project" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                            <a href="https://animefirst.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                 <div>
                    <img className="proj" src={Calculator} alt="placeholder" style={{width:"400px",marginBottom:"15px"}}></img><br></br>
                    <p className="text-center">Calculator</p>
                    <div className="text-center">
                        <a href="https://github.com/Harmit1708/New-Calculator" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                        <a href="https://newcalculator1.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                    </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <div>
                        <img className="proj" src={Pagination} alt="placeholder" style={{width:"400px",marginBottom:"15px"}}></img><br></br>
                        <p className="text-center">Pagination</p>
                        <div className="text-center">
                            <a href="https://github.com/Harmit1708/Pagination" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                            <a href="https://frosty-austin-44d794.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div>
                        <img className="proj" src={Phonedetails} alt="placeholder" style={{width:"400px",marginBottom:"15px",marginRight:"20px"}}></img><br></br>
                        <p className="text-center">Phone Details Api Based </p>
                        <div className="text-center">
                            <a href="https://github.com/Harmit1708/Phonedetails" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                            <a href="https://keen-brown-6b9254.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                        </div>
                    </div>     
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div>
                        <img className="proj" src={Design} alt="placeholder" style={{width:"400px",marginBottom:"15px",marginRight:"20px"}}></img><br></br>
                        <p className="text-center">WebPage Design</p>
                        <div className="text-center">
                            <a href="https://github.com/Harmit1708/Shopping-page" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                            <a href="https://inspiring-euclid-8f756b.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                        </div>
                    </div>     
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div>
                        <img className="proj" src={Student} alt="placeholder" style={{width:"400px",marginBottom:"15px",marginRight:"20px"}}></img><br></br>
                        <p className="text-center">Student Data</p>
                        <div className="text-center">
                            <a href="https://github.com/Harmit1708/sb-admin-context" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                            <a href="https://sb-admin1.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                        </div>
                    </div>     
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <div>
                        <img className="proj" src={Movie} alt="placeholder" style={{width:"400px",marginBottom:"15px",marginRight:"20px"}}></img><br></br>
                        <p className="text-center">Movie Details Using Formik</p>
                        <div className="text-center">
                            <a href="https://github.com/Harmit1708/movie-formik" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><GitHubIcon/></a>
                            <a href="https://movie-formik.netlify.app/" target="_blank" rel="noreferrer" style={{marginRight:"10px",color:"white"}}><OpenInNewIcon/></a>
                        </div>
                    </div>     
                </Carousel.Item>

            </Carousel>  
        </div>
      </div>
    </div>
  );
}

export default Otherwork;
