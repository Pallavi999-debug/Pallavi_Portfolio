import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, This is <span> <b className="blue">Pallavi Patil</b></span>
            &nbsp; from <span><b className="blue"> Sydney, Australia.</b></span>
            <br />I have completed a Master of IT in Software Development from the <b className="blue">University of Technology Sydney.</b>
            <br />
            <br />
            Besides coding, My interests are as below,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking Different Cusines
            </li>
            <li className="about-activity">
              <ImPointRight /> Making New Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga & Meditation
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "lightblue" }}>
            "Creativity is innovation!"{" "}
          </p>
          <footer className="blockquote-footer">Pallavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
