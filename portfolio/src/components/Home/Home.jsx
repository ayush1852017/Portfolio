import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main1.svg";
import Particle1 from "../Particle1";

import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle1 />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header home-left'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{" "}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> AYUSH BAJPAI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className='home-right' style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;