import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import car from "../../Assets/Projects/car.PNG";
import planet from "../../Assets/Projects/planet travel.PNG";
import news from "../../Assets/Projects/star news.PNG";
import dream from "../../Assets/Projects/dream travel.PNG";
import gemini from "../../Assets/Projects/gemini.PNG";
import absolute from "../../Assets/Projects/absolute fitness.PNG";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Rental"
              description="Car Rental website using PHP, HTML, CSS, XML, and AJAX. AJAX is used to check avilability of the car. Depend on the availability user can add car to the shopping cart. User can set rent days and also delete cars from the shopping cart. Checkout button is provided on the checkout page where user need to fill purchase form and fill delivery details."
              link="https://github.com/Pallavi999-debug/Car_Rental"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planet}
              isBlog={false}
              title="Planet Travel"
              description="Planet Travel website using HTML and CSS. Website have attractive video showing nice views which encourages customers to really fall in love of travel. International travel countries and special travel packages are displayed on the screen. Customers can contact the company by filling contact us form and also by connecting on the Social Media."
              link="https://github.com/Pallavi999-debug/Planet_Travel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Star News"
              description="Star News website using HTML and CSS. Different news categories and breaking news are displayed on top of the screen. Featured, latest and other selected headlines displayed clearly along with pictures so that users can quickly select news and get all information. Users can subscribe to star news for latest updates and also connect on the social media."
              link="https://github.com/Pallavi999-debug/Star_News"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dream}
              isBlog={false}
              title="Dream Travel"
              description="Dream Travel website using JavaScript, HTML, and CSS. Services and Products links given at the top. Home page attractive background video gives real feel of the adventure. World's popular destinations and their images inspires users to visit that places and do some exciting things. Social media links are given for users to follow company on the social media and know more adventures."
              link="https://github.com/Pallavi999-debug/Dream_Travel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini"
              description="Gemini online pizza order website using JavaScript, HTML, and CSS. Very attractive UI Design for both desktop as well as Mobile. Menu displayed on the top right corner where customer can check pizza and desert by selecting respective option and for more user can click on Full Menu option. All specials are nicely displayed on the homepage so that users will not miss any specials."
              link="https://github.com/Pallavi999-debug/Gemini"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={absolute}
              isBlog={false}
              title="Absolute Fitness"
              description="Absolute Fitness responsive website using JavaScript, HTML, CSS, and GSAP. Services, Plans, and Trainers links given at the top. Also Special membership deal, services, plans, and trainers details displayed on the homepage so that customers can check quickly and will not miss anything. Gym contact number and social media links given in the footer section."
              link="https://github.com/Pallavi999-debug/Absolute_Fitness"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
