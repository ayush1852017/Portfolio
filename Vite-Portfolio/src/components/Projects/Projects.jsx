import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle1 from "../Particle1";
import pepperfry from "../../Assets/Projects/pepperfry.jpeg";
import onemg from "../../Assets/Projects/1mg.jpeg";
import gitprofile from "../../Assets/Projects/gitprofile.jpeg";
function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle1 />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='orange'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={onemg}
              isBlog={false}
              title='1mg-Clone'
              description='Clone of Img website along with one teammate. This will be used to buy medicines online'
              link='https://github.com/PRAKASH-1971/1mg-team'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={pepperfry}
              isBlog={false}
              title='Pepperfry-Clone'
              description='Clone of Pepperfry along with 5 teammates. This platform is an furniture ecommerce platform'
              link='https://github.com/NishutSuman/Pepperfry_Clone'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={gitprofile}
              isBlog={false}
              title='Github-Profiles'
              description='Fetching github profile with react.js. We can see everysingle details of an user on this'
              link='https://github.com/ayush1852017/Git-clone'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
