import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LITTLE ABOUT<span className="blue"> MYSELF</span> 
            </h1>
            <p className="home-about-body">
              I have passion for <b className="blue">programming</b> and I have definately learnt
              something
              <br />
              <br />I am proficient in 
              <i>
                <b className="blue"> Javascript, HTML5 and CSS3</b>
              </i>
              <br />
              <br />
              I am very interested in building new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> 
              </i>
              <br />
              <br />
              I also enjoy developing products
              with <b className="blue">Node.js</b> and
              <br/>
              <br/>
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Framework
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js</b>
              </i>
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
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pallavi999-debug"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pallavivpatil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
