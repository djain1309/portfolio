import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const type = [
    "Software Developer Engineer",
    "MERN Full Stack Developer",
    "Front End Specialist",
  ]
  const authorization = [
    "Authorized to work in USA for any employer",
    "Ready to relocate in USA"
  ]
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>Welcome Guest{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Meet 
                <strong className="main-name"> DEEPANSHU </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type  type = {type} />
              
                <Type  type = {authorization} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
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
