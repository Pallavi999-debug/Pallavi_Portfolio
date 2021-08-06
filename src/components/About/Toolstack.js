import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiMicrosoftoffice,
  SiVisualstudio,
  SiVisualstudiocode,
  SiJupyter,
  SiAnaconda,
  SiGithub,
  SiTeamviewer
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTeamviewer />
      </Col>
    </Row>
  );
}

export default Toolstack;
