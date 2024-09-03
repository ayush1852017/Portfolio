import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='orange'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className='orange'> React, Angular and node. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='orange'>Web Technologies and Products </b> and
                also in areas related to{" "}
                {/* <b className='orange'>
                 
                </b> */}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <a href="https://angular.dev/overview" target="_blank" className='orange'>Angular</a> and
              <i>
                <b className='orange'>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <a href="https://react.dev/learn" target="_blank" className='orange'> React.js</a>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/bajpai1852017'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/ayush-bajpai25/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
