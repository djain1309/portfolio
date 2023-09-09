import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Quick <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Innovative Developer</span> with a keen understanding of business dynamics.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Strong interpersonal skills</span> for effective collaboration and communication.
            </li>
            <li className="about-activity">
              <ImPointRight /> Possesses a <span className="purple"> broader perspective</span> to see the bigger picture.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Enthusiastic</span> about technology and embraces change.
            </li>  
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Values diversity in teams and promotes inclusivity.</span>
            </li>  
            <li className="about-activity">
              <ImPointRight /> Always <span className="purple"> ready and willing</span> to offer assistance and support.
            </li>             
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/deepanshu-jain13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/djain1309"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/djain_13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
