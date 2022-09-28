import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Stylecraze from '../../Assets/Projects/Stylecraze.png'

import SamsumgIndia from "../../Assets/Projects/SamsungIndia.png";


import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={SamsumgIndia}
              isBlog={false}
              title="Samsung India for Website"
              description="In this website you can find Samsung Products. All Samsung Products are Available here. Login , Add to card,Sorting and filter functionalities are also there."
              tech="LocalStorage |  Doom |  Html  |  javascript  |  bootsrtap  |  CSS"
              link="https://github.com/MJaved9/Samsung-india-clone"
              linkmedium="https://www.samsung.com/in/"
              linklive="https://mjaved9.github.io/Samsung-india-clone/index.html"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Stylecraze}
              isBlog={false}
              title="StyleCraze Clone"
              description="This project is a clone of Stylecraze.com which is well known online Blog website. The company specializes in fast fashion, and products include Makeups, accessories, shoes, beauty products and many more things Blogs."
              tech="Bootstrap  |  React  |  HTML |  CSS |  JavaScript  | Redux"
              link="https://github.com/MJaved9/StyleCraze_Code"
              linkmedium="https://www.stylecraze.com/"
              linklive="https://stylecrazeapp.vercel.app/"
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Practo}
              isBlog={false}
              title="Practo Clone "
              description="This project is a clone of Practo.com which is health realated website where you can consult with top Doctors for any health concern and also can buy medicines from there ."
              tech="HTML  |  CSS  |  JavaScript"
              link="https://github.com/anjumara07/Practo-Clone-Project"
              linkmedium="https://medium.com/@anshukelodiya/our-project-team-practo-b6109bd14863"
              linklive="https://practo-clone-project.netlify.app/"
            />
          </Col>

           <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="You Tube Clone"
              description="A simple mini you tube app."
              tech="HTML  |  JavaScript  |  CSS"
              link="https://github.com/anjumara07/mini-youtube"
              linkmedium=""
              linklive="https://mini-you-tube-app.netlify.app/"
            />
          </Col>

         <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A simple weather application for users which gives you next 7 days weather information."
              tech="HTML  |  CSS  | JavaScript"
              link="https://github.com/anjumara07/weather-app"
              linkmedium=""
              linklive="https://my-weather-app-proj.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic tac Toe Game"
              description="A simple tic-tac-toe game where users can play the game"
              tech="ReactJs  |  CSS"
              link="https://github.com/anjumara07/Tic-Tac-Toe"
              linkmedium="#"
              linklive="https://tic-tac-toe-anjum.vercel.app/"
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;