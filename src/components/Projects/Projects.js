import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Stylecraze from '../../Assets/Projects/Stylecraze.png'

import SamsumgIndia from "../../Assets/Projects/SamsungIndia.png";

import Bitrix from "../../Assets/Projects/Bitrix24.png";
import Tripvillas from '../../Assets/Projects/Tripvillas.png'
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
            imgPath={Bitrix}
            isBlog={false}
            title="Bitrix24"
            description="Bitrix24 is a client management solution that provides a platform for businesses to organize and track interactions with potential or existing clients and partners."
            tech="NodeJS |  Mongo DB |  React  |  Redux  | Express | Chakra UI  | HTML| bootsrtap  |  CSS | "
            link="https://github.com/AnshGirdhar1/psychotic-cars-5822"
            linkmedium="https://www.bitrix24.in/"
            linklive="https://bitrix24-website-clone.netlify.app/"
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

          <Col md={5} className="project-card" data-aos="fade-right">
          <ProjectCard
            imgPath={Tripvillas}
            isBlog={false}
            title="Tripvillas "
            description="Largest holiday home rental portal in Asia. Browse your ideal vacation home from over 100000 holiday homes spread across destinations."
            tech=" React  |  Redux  | Chakra UI  | HTML| bootsrtap  |  CSS | "
            link="https://github.com/Inder-Pal-github/tripVilla"
            linkmedium="https://www.tripvillas.com/"
            linklive="https://tripsvilla-clone-project.netlify.app/"
          />
        </Col>

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


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;