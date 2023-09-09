import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Meet <span className="purple">Deepanshu </span> */}
            {/* from <span className="purple"> New York, USA.</span> */}
            Deepanshu - a Software Engineer with a passion for innovation and excellence,
             with <span className="purple">5 years of industry experience</span> and a strong foundation in Computer Science.
            <br /> Deepanshu has honed his skills in building complex and robust applications. 
            His unwavering commitment to reducing complexity in software engineering has made him a valuable asset to the organizations he has worked with.
            <br />
            Currently pursuing his <span className="purple">Master of Science degree from University at Buffalo, New York, USA.</span>
            <br />
            Deepanshu's insatiable thirst for knowledge has kept him at the forefront of cutting-edge technology. 
            His diverse experience and expertise in the field have equipped him with the ability to seamlessly navigate any job listing.
            <br />
            Deepanshu is now seeking a <span className="purple">Full time opportunity as a Software Developer Engineer </span> 
             and is eager to contribute his technical prowess and adaptive abilities to a dynamic organization. 
            With a proven track record of delivering high-quality solutions and a passion for creating innovative software, he is the ideal candidate for any forward-thinking company looking to stay ahead in today's rapidly evolving tech landscape.
            <br />
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight className="purple" /> <b className="purple">I'm Authorized to Work in USA for any employer.</b>
            </li>
            <li className="about-activity">
              <ImPointRight className="purple"/> <b className="purple">I'm ready to Relocate</b>
            </li>
            </ul>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Interacting with people
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tech is the canvas, and innovation is the brush that paints the future."{" "}
          </p>
          <footer className="blockquote-footer">Deepanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
