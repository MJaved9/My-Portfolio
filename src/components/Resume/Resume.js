import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/JavedResume.pdf";
import Javed from '../../Assets/Mohd_javed.png'
import "aos/dist/aos.css";
function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button variant="primary" href={pdf} target="_blank">
            Resume
          </Button>
        </Row>
        <br/>
        <div>
            <img
              src={Javed}
              alt=""
              style={{ height: "1060px", width: "750px", borderRadius: "10px" }}
            />
        </div>
        <br/>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button variant="primary" href={pdf} target="_blank">
             Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
