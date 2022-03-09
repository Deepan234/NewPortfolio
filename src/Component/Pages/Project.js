import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Movie from "../../Assets/movie.jpg"
import School from "../../Assets/school.jpg"
import SchoolBack from "../../Assets/schoolapp.jpg"
import "./project.css"

export default function Project() {
  return (
    <div>
      <h1 className="text-center py-5 my-5" style={{color:"white"}}>PROJECTS</h1>
      <Container>
      <div className="row">
         
          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
          <a href="https://github.com/Deepan234/MovieTicketingApp">
            <div className="card">
              <img
                className="card-img-top"
                src={Movie}
                alt="Movie"
              />
              <div className="card-body px-5">
                <h2 className="pb-3">MOVIE TICKETING</h2>
                  Movie Ticketing App is to book a ticket in a specific app where movies which shows in screen are listed by clicking the movies user can see screen list for particular movie and he can book is own seats and pursue the ticket and enjoys the cinema
                <br />
                </div>
              <div className="card-footer">
                <span className="badge bg-dark m-2 p-2">SPRING BOOT</span>
                <span className="badge bg-dark m-2 p-2">MY SQL</span>
                <span className="badge bg-dark m-2 p-2">SWAGGER ENABLED</span>
              </div>
            </div>
            </a>
            </div>
         
         
          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
          <a href="https://github.com/Deepan234/SchoolBackEnd">
            <div className="card">
              <img
                className="card-img-top"
                src={SchoolBack}
                alt="Movie"
              />
              <div className="card-body px-5">
                <h2 className="pb-3">SCHOOL APP BACKEND</h2>
                  School Application it used to find school nearer to you and their ratings and user can also add suggestion to add some schools nearer to them. So that admin can login to portal and add Some schools to help users nearby that added school,back end.
                <br />
                </div>
              <div className="card-footer">
                <span className="badge bg-dark m-2 p-2">SPEING BOOT</span>
                <span className="badge bg-dark m-2 p-2">MY SQL</span>
                <span className="badge bg-dark m-2 p-2">SWAGGER ENABLED</span>
              </div>
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
          <a href="https://github.com/Deepan234/school">
            <div className="card">
              <img
                className="card-img-top"
                src={School}
                alt="Movie"
              />
              <div className="card-body px-5">
                <h2 className="pb-3">SCHOOL APP FRONTEND</h2>
                  School Application it used to find school nearer to you and their ratings and user can also add suggestion to add some schools nearer to them. So that admin can login to portal and add Some schools to help users nearby that added school,front end.
                <br />
                </div>
              <div className="card-footer">
                <span className="badge bg-dark m-2 p-2">REACT JS</span>
                <span className="badge bg-dark m-2 p-2">BOOTSTRAP</span>
                <span className="badge bg-dark m-2 p-2">MATERIAL UI</span>
              </div>
            </div>
            </a>
          </div>
          </div>
          <br/>
          <Link to="/qualification">
          <Button className='project-color'>
             QUALIFICATION
          </Button>
          </Link>
          </Container>
      </div>     
  )
}
