import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="orange">Ayush Bajpai </span>
            from <span className="orange"> Gola Gokaran Nath, India.</span>
            <br />I am a Aspiring Full Stack Web Developer
            <br /> From Masai School
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening and understanding Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Comics and sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploreing Tech
            </li>
          </ul>

          <p style={{ color: "#f46850" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush Bajpai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
