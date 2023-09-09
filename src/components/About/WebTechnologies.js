import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiFlask,
  SiDjango,
  SiExpress,
  SiVuedotjs,
  SiSocketdotio,
  SiGraphql,
  SiJest,
  SiMocha,
  SiMaterialdesign,
  SiD3Dotjs,
  SiChartdotjs,
  SiHtml5,
  SiCss3,
  SiCloudera,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        {/* <DiRedux /> */}REDUX
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMocha />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiD3Dotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiChartdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudera />
      </Col>

    </Row>
  );
}

export default Techstack;
