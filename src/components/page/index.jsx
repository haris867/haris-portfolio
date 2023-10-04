import React, { useRef, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import { Canvas } from "@react-three/fiber";
import Stars from "../stars";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import { FaGlobe, FaGithub } from "react-icons/fa";
import HuLogo from "../logo";
import Globe from "../globe";

function ThreeFiberScene() {
  const cameraRef = useRef();

  return (
    <div className="canvas-container">
      <Canvas className="canvas-wrapper">
        <perspectiveCamera
          ref={cameraRef}
          aspect={1 / 4}
          fov={75}
          position={[0, 0, 25]}
        />
        <Stars count={300} />
      </Canvas>
    </div>
  );
}

export default function Page() {
  const svgRef = useRef();

  useEffect(() => {
    if (svgRef.current) {
      const strokePath = svgRef.current.querySelector(".silhouette-animation");
      if (strokePath) {
        strokePath.addEventListener("click", restartAnimation);

        function restartAnimation() {
          if (this && this.parentNode) {
            const clonedElement = this.cloneNode(true);
            this.parentNode.replaceChild(clonedElement, this);
            clonedElement.addEventListener("click", restartAnimation);
          }
        }
      }
    }
  }, []);

  return (
    <div className="layout-container">
      <Header />
      <ThreeFiberScene />
      <div className="layout-outlet">
        <Col xs={10} sm={10} className="heading mx-auto">
          <h1 className="fw-bold fs-2 main-heading text-center">
            Hello world 👋
          </h1>
          <div className="globe-container">
            <Globe />
          </div>
        </Col>
        <Col
          xs={10}
          sm={10}
          className="heading mx-auto justify-content-center name-container"
        >
          <div>
            <h2 className="fw-normal fs-2 main-heading text-center my-2 w-100">
              Jeg heter
            </h2>
          </div>
          <div className="logo-name w-50 mx-auto">
            <HuLogo />
          </div>
        </Col>

        <Row className="m-0">
          <Col
            xl={6}
            className="about align-items-center d-flex justify-content-center my-3"
          >
            <Col xs={10} md={6} xl={7} className="mx-auto">
              <div className="heading pt-2">
                <h3 className="fw-bold mb-3">LITT OM MEG</h3>
                <p>
                  Jeg er en 25 år gammel nyutdannet(og ambisiøs)
                  Frontend-utvikler fra Oslo. Med solid kompetanse fra studiet
                  mitt ved Noroff, brenner jeg for å designe og utvikle
                  nettsider som ikke bare ser bra ut, men som også gir en flott
                  brukeropplevelse.
                </p>
                <p>
                  Min bakgrunn inkluderer også seks år i kundeservice, noe som
                  har gitt meg verdifulle ferdigheter i kommunikasjon og
                  samarbeid. Jeg trives i krysningspunktet mellom design og
                  teknisk utvikling, og søker nå etter muligheter hvor jeg kan
                  bidra med min kombinasjon av kreativitet, teknisk ekspertise
                  og kundefokus.
                </p>
              </div>
            </Col>
          </Col>
          <Col className="projects my-3 mb-5">
            <Col xs={10} md={8} lg={6} xl={7} className="mx-auto">
              <div className="heading">
                <h3 className="fw-bold mb-3">PROSJEKTER</h3>
              </div>
            </Col>
            <Carousel>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <Col xs={8} md={6} lg={6}>
                    <img
                      className="w-100"
                      src="/images/lctroop-slide.png"
                      alt={`Slide`}
                    />
                    <Carousel.Caption className="d-flex justify-content-between align-items-center">
                      <h3 className="m-0 mx-3">LC Troop</h3>
                      <div className="icons mx-3">
                        <a
                          href="https://lctroop.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGlobe />
                        </a>
                        <a
                          href="https://github.com/haris867/lctroop"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </Carousel.Caption>
                  </Col>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <Col xs={8} md={6} lg={6}>
                    <img
                      className="w-100"
                      src="/images/bitsandbots-slide.png"
                      alt={`Slide`}
                    />
                    <Carousel.Caption className="d-flex justify-content-between align-items-center">
                      <h3 className="m-0 mx-3">Bits & Bots</h3>
                      <div className="icons mx-3">
                        <a
                          href="https://bitsandbotsgames.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGlobe />
                        </a>
                        <a
                          href="https://github.com/haris867/bitsandbots"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </Carousel.Caption>
                  </Col>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <Col xs={8} md={6} lg={6}>
                    <img
                      className="w-100"
                      src="/images/glimt-slide.png"
                      alt={`Slide`}
                    />
                    <Carousel.Caption className="d-flex justify-content-between align-items-center">
                      <h3 className="m-0 mx-3">Glimt</h3>
                      <div className="icons mx-3">
                        <a
                          href="https://glimt.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGlobe />
                        </a>
                        <a
                          href="https://github.com/haris867/glimt"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </Carousel.Caption>
                  </Col>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <Col xs={8} md={6} lg={6}>
                    <img
                      className="w-100"
                      src="/images/holidaze-slide.png"
                      alt={`Slide`}
                    />
                    <Carousel.Caption className="d-flex justify-content-between align-items-center">
                      <h3 className="m-0 mx-3">Holidaze</h3>
                      <div className="icons mx-3">
                        <a
                          href="https://holidaze-haris.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGlobe />
                        </a>
                        <a
                          href="https://github.com/haris867/project-exam-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </Carousel.Caption>
                  </Col>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <Col xs={8} md={6} lg={6}>
                    <img
                      className="w-100"
                      src="/images/auctionhouse-slide.png"
                      alt={`Slide`}
                    />
                    <Carousel.Caption className="d-flex justify-content-between align-items-center">
                      <h3 className="m-0 ms-3">Auction House</h3>
                      <div className="icons me-3">
                        <a
                          href="https://auction-house-haris.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGlobe />
                        </a>
                        <a
                          href="https://github.com/haris867/sp-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </Carousel.Caption>
                  </Col>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <div>
            <Col xs={10} md={8} lg={6} xl={7} className="mx-auto">
              <div className="heading">
                <h3 className="fw-bold mb-3">FERDIGHETER</h3>
                <p className="text-center">
                  HTML - CSS - JavaScript - React - Bootstrap - React Bootstrap
                  - SASS - Three.js - React-three-fiber - Git - GitHub - npm -
                  CMS (Sanity & WordPress) - Web design - Figma & Adobe XD
                  (wireframes & prototyping) - Responsivt design - WCAG (Web
                  Content Accessibility Guidelines)
                </p>
              </div>
            </Col>
          </div>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
