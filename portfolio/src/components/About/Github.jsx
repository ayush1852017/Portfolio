import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className='project-heading' style={{ paddingBottom: "20px" }}>
        Days I <strong className='orange'>Code</strong>
      </h1>
      <GitHubCalendar
        username='ayush1852017'
        blockSize={15}
        blockMargin={5}
        color='#f69c78'
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
