import React from 'react'
import picture from '../../Assets/pic.jpeg'
import { Button, Container } from 'react-bootstrap'
import"./home.css";
import { Link } from 'react-router-dom';
import Resume from "../../Assets/Deepan Chakravarthy Resume.pdf"

export default function Home() {
  return (
    <div className="home">
    <Container>
      <div className="row py-4 my-5">
        <img
          style={{borderRadius:"20px"}}
          className='col-md-3 col-sm-10 py-5 my-5 bg-secondary'
          src={picture}
        />
        <div className="col-md-8 col-sm-12 p-5 text-center">
        <div className="mb-5">
        <h2 style={{color:"white"}}>"HELL0, WELCOME ALL!"</h2>
        </div>
        <div>
          <div style={{color:"white"}}>TDC</div>
          <h4 className="mb-5 text-primary">I'M T DEEPAN</h4>
              <p className="home-text" style={{color:"white"}}>
                 I'M A FULL-STACK DEVELOPER. 
                <br /> 
                I AM AN COMFORTABLE FULL STACK DEVELOPER WHO WORKS WITH BOTH FRONTEND AND BACKEND APPLICATION. 
              </p>
              <div>
                <Button  onClick={()=>{
                  window.open(Resume,"_blank")
                }}>
                  RESUME
                </Button>
              </div>
              <br/>
              <div>
                <Link to="/contact">
                <Button className="home-color">
                   CONTACT PAGE
                </Button>
                </Link>
              </div>
        </div>
        </div>
      </div>
    </Container>  
    </div>
  )
}
