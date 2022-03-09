import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./project.css"

export default function Qualification() {
  return (
    <div>
      <h1 className="text-center py-5 my-5" style={{ color: "white" }}>MY QUALIFICATION</h1>
      <Container>
        <div className="row">

          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
            <Card
              bg='dark'
              text='white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>SECONDARY SCHOOL LEAVING CERTIFICATE</Card.Header>
              <Card.Body>
                <Card.Title>SSLC</Card.Title>
                <Card.Text>
                <p>
                  <b>PERCENTAGE:</b>94.5%
                </p>
                </Card.Text>
                <Card.Text>
                <p>
                  <b>COMPLETION YEAR :</b>2015
                </p>
                </Card.Text>
                <Card.Text>
                <p>
                  <b>SCHOOL NAME:</b>SBOA SCHOOLS
                </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
            <Card
              bg='dark'
              text='white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>HIGHER SECONDARY CERTIFICATE</Card.Header>
              <Card.Body>
                <Card.Title>SSLC</Card.Title>
                <Card.Text>
                <p>
                  <b>PERCENTAGE:</b>90.5%
                </p>
                </Card.Text>
                <Card.Text>
                <p>
                  <b>COMPLETION YEAR :</b>2017
                </p>
                </Card.Text>
                <Card.Text>
                <p>
                  <b>SCHOOL NAME:</b>SBOA SCHOOLS
                </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
            <Card
              bg='dark'
              text='white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>BACHELOR OF ENGINEERING</Card.Header>
              <Card.Body>
                <Card.Title>ELECTRONICS AND COMMUNICATION & ENGINEERING</Card.Title>
                <Card.Text>
                <p>
                  <b>CGPA:</b>8.34
                </p>
                </Card.Text>
                <Card.Text>
                <p>
                  <b>COMPLETION YEAR :</b>2021
                </p>
                </Card.Text>
                <Card.Text>
                <p>
                  <b>COLLEGE NAME:</b>VELTECH MULTITECH
                </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Link to="/service">
        <Button className="project-color">
          SERVICE
        </Button>
        </Link>
      </Container>
    </div>
  )
}
