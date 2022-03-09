import React from 'react'
import { Container,Card } from 'react-bootstrap'

export default function Service() {
  return (
    <div>
    <h1 className="text-center py-5 my-5" style={{ color: "white" }}>MY EXPERIENCE</h1>
    <Container>
      <div className="row">

        <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
          <Card
            bg='success'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header><b>INTERNSHIP TRAINEE AT CAPGEMINI</b></Card.Header>
            <Card.Body>
              <Card.Title>FULL STACK DEVELOPMENT WITH REACT JS</Card.Title>
              <Card.Text>
              <b>TRAINED RESOURCES</b>:<p>COREJAVA, SPRINGBOOT, POSTGRESQL, MYSQL, JENKINS, SONARQUBE, GITHUB, REACTJS, BOOTSTRAP, HTML5, CSS, JAVASCRIPT</p>
              </Card.Text>
              <Card.Text>
              <b>DURATION</b>:<p>FEB 2021- MAY 2021</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
          <Card
            bg='success'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header><b>ANALYST/SOFTWARE ENGINEER AT CAPGEMINI</b></Card.Header>
            <Card.Body>
              <Card.Title>FULL STACK DEVELOPMENT WITH REACT JS</Card.Title>
              <Card.Text>
              <b>TRAINED RESOURCES</b>:<p>AWS FUNDAMENTALS, PEGA, CORESPRING</p>
              </Card.Text>
              <Card.Text>
              <b>DURATION</b>:<p>AUG 2021- NOV 2021</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
          <Card
            bg='success'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header><b>ANALYST/SOFTWARE ENGINEER AT CAPGEMINI</b></Card.Header>
            <Card.Body>
              <Card.Title>FULL STACK DEVELOPMENT WITH REACT JS</Card.Title>
              <Card.Text>
              <b>TRAINED RESOURCES</b>:<p>MICROSERVICES, SPRINGBOOT, SPRINGSECURITY, SPRINGCLOUD, EUREKASERVER, GRAPHQL, REACT JEST, ENZYMES, MOCKITO, JUNIT</p>
              </Card.Text>
              <Card.Text>
              <b>DURATION</b>:<p>NOV 2021- PRESENT</p>
              <b>ALLOCATION</b>:<p>DISCOVER FINANCIAL SERVICES,USA</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  </div>
  )
}
