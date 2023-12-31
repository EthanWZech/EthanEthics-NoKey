import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import React, { useState, useEffect, useRef } from "react";
import { Component } from "react";
import "./index.css";
import AnchorLink from "react-anchor-link-smooth-scroll"; // npm install react-anchor-link-smooth-scroll
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { GetPositiveAIResponse, GetNegativeAIResponse, GetNeutralAIResponse } from "../src/api/ChatGPTApi.mjs";
import OpenAI from 'openai';

export const LandingPage = () => {
  const homeRef = useRef(0);
  const aboutUsRef = useRef(0);
  const howItWorksRef1 = useRef(0);
  const howItWorksRef2 = useRef(0);
  const howItWorksRef3 = useRef(0);
  const howItWorksRef4 = useRef(0);
  const contactUsRef = useRef(0);

  const [homeLoaded, setHomeLoaded] = useState(false);
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [worksLoaded1, setWorksLoaded1] = useState(false);
  const [worksLoaded2, setWorksLoaded2] = useState(false);
  const [worksLoaded3, setWorksLoaded3] = useState(false);
  const [worksLoaded4, setWorksLoaded4] = useState(false);
  const [contactLoaded, setContactLoaded] = useState(false);

  const [textInput, setTextInput] = useState('');
  const [outputText, setOutputText] = useState('-Output will be displayed here-');

  const eventSetOutputText = (event) => {
    setOutputText(event.target.value);
  };

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleNeutralButtonClick = () => {
    async function waitForNeutral(prompt) {
      const waiting = "Generating...";
      setOutputText(waiting);
      const result = await GetNeutralAIResponse(prompt);
      setOutputText(result);
     //Whatever Text needs to be updated or variable needs to be called = result;
    }
    waitForNeutral(textInput);

    //const waiting = "Generating...";
    //setOutputText(waiting);
  };

  const handlePositiveButtonClick = () => {
    async function waitForPositive(prompt) {
      const waiting = "Generating...";
      setOutputText(waiting);
      const result = await GetPositiveAIResponse(prompt);
      setOutputText(result);
     //Whatever Text needs to be updated or variable needs to be called = result;
    }
    waitForPositive(textInput);

    //const waiting = "Generating...";
    //setOutputText(waiting);
  };

  const handleNegativeButtonClick = () => {
    async function waitForNegative(prompt) {
      const waiting = "Generating...";
      setOutputText(waiting);
      const result = await GetNegativeAIResponse(prompt);
      setOutputText(result);
     //Whatever Text needs to be updated or variable needs to be called = result;
    }
    waitForNegative(textInput);

    //const waiting = "Generating...";
    //setOutputText(waiting);
  };

  //inspired by code found at: https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset + 0.75 * window.innerHeight;
    setScrollPosition(position);

    if (position >= homeRef.current.offsetTop) {
      setHomeLoaded(true);
    }
    if (position >= aboutUsRef.current.offsetTop) {
      setAboutLoaded(true);
    }
    if (position >= howItWorksRef1.current.offsetTop) {
      setWorksLoaded1(true);
    }
    if (position >= howItWorksRef2.current.offsetTop) {
      setWorksLoaded2(true);
    }
    if (position >= howItWorksRef3.current.offsetTop) {
      setWorksLoaded3(true);
    }
    if (position >= howItWorksRef4.current.offsetTop) {
      setWorksLoaded4(true);
    }
    if (position >= contactUsRef.current.offsetTop) {
      setContactLoaded(true);
    }

  };

  const scrollTo = (location) => {
    if (location == 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location == 2) {
      window.scrollTo({ top: (aboutUsRef.current.offsetTop - homeRef.current.offsetTop), behavior: "smooth" });
    } else if (location == 3) {
      window.scrollTo({ top: (howItWorksRef1.current.offsetTop - homeRef.current.offsetTop), behavior: "smooth" });
    } else if (location == 4) {
      window.scrollTo({ top: (contactUsRef.current.offsetTop - homeRef.current.offsetTop), behavior: "smooth" });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setHomeLoaded(true); //automatically loads the home section when the page loads

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar sticky="top" className="color-nav" expand="xxl" collapseOnSelect>
        <Container fluid className="m-0">
          <Navbar.Brand className="theBrand">
            <a href="/">
              <Image src="/logo_text.png" className="nav-image" alt="logo"></Image>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <NavbarCollapse className="fs-4">
            <hr />
            <Nav className="me-auto nav-font">
              <Nav.Link eventKey="1" onClick={() => { scrollTo(1) }} className="text-light mx-5 text-nowrap">
                Home
              </Nav.Link>
              <Nav.Link eventKey="2" onClick={() => { scrollTo(2) }} className="text-light mx-5 text-nowrap">
                Ask Question
              </Nav.Link>

              <Nav.Link eventKey="3" onClick={() => { scrollTo(3) }} className="text-light mx-5  text-nowrap">
                How it Works
              </Nav.Link>
              <Nav.Link eventKey="4" onClick={() => { scrollTo(4) }} className="text-light mx-5  text-nowrap">
              About Us
              </Nav.Link>
            </Nav>
            {/* <div className="nav-font">
              <Link to={"/login"} className="nav-link text-light mx-5">
                Log in
              </Link>
            </div> */}
          </NavbarCollapse>
        </Container>
      </Navbar>

      <Container
        fluid
        ref={homeRef}
        className={`${homeLoaded ? "unhideIt" : "hideIt"} main-bg`}
      >
        <Row className="text-left addPadding px-5">
          <Row className="display-1 text-white" id="header">
            Ethical Issues<br></br>made simple
          </Row>
          <Row className="display-6 text-white px-3" id="small-header">
            For every ethical question and beyond
          </Row>
        </Row>
      </Container>

      <br />

      <Container
        ref={aboutUsRef}
        className={`${aboutLoaded ? "unhideIt" : "hideIt"} addPadding1 px-3`}
      >
  <Row className="text-left mt-5 mb-3 ">
          <Col className="display-4" id="header"> Enter an Ethical Issue that you want to learn about into the Text Field Below. </Col>
        </Row>

        <Row className="text-left pt-3 mb-5">
          <Col className="fs-2" id="small-header">
           <input
           style={{
            width: '100%',
            height: '90px',
            fontSize: '30px',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
           }}
            type="text"
            value={textInput}
            onChange={handleInputChange}
            placeholder="Type your issue here..."
            />
          </Col>
        </Row>
        
        <Row className="text-left pt-3 mb-5">
          <Col className="fs-2" id="small-header">
            <textarea
            className="outputArea"
            style={{
              width: '100%',
              height: '300px',
              fontSize: '18px',
              textAlign: 'left',
            }}
            value={outputText}
            onChange={eventSetOutputText}
            //readOnly
            //placeholder="Output will be displayed here..."
            />
          </Col>
        </Row>

        <Row className="text-left pt-3 mb-5">
          <Col className="fs-2" id="small-header">
           Select the Button with the Position you want to Read About!
          </Col>
          
        </Row>
        <Row>
          <Col>
            <Button
                className="col-12 mt-2 submitButton"
                onClick={handleNeutralButtonClick}
                >
                NEUTRAL
              </Button>
              
              </Col>
        <Col><Button
                className="col-12 mt-2 submitButton"
            
                 onClick={handlePositiveButtonClick}
              >
                FOR
              </Button></Col>
        <Col><Button
                className="col-12 mt-2 submitButton"
            
                onClick={handleNegativeButtonClick}
              >
                AGAINST
              </Button></Col>
              </Row>

            

        

      


        <Row className="text-left mt-5 mb-3 ">
          <Col className="display-4" id="header"> Ask your ethical questions here... </Col>
        </Row>
        {/* <Row className="text-left pt-3 mb-5">
          <Col className="fs-2" id="small-header">
            Welcome to our platform, where all ethical questions have an answer!
          </Col>
        </Row> */}
      </Container>

      

      {/* 
        Add more content down here, such as an about section, a mission
        statement, etc.
        Examples of what I think would look good: 
        https://www.etecc.com/
        https://evrone.com/
        https://nomadictribe.com/
      */}
      <Container fluid className="main-bg">
        {/* <Row
          ref={howItWorksRef1}
          className={`text-center mt-5 mb-4 ${worksLoaded1 ? "unhideIt" : "hideIt"
            }`}
        >
          <Col className="pt-2 display-4" id="header"> How it Works</Col>
        </Row>

        <br /> */}

        <Row
          ref={howItWorksRef1}
          className={` main-bg ${worksLoaded1 ? "unhideIt" : "hideIt"}`}
        >
          <Col className="p-0" xs={12} sm={12} md={12} lg xl xxl>
            <Image
              src="/tyler-franta-iusJ25iYu1c-unsplash.jpg"
              className="img-fluid mx-auto"
            ></Image>
          </Col>
          <Col className="p-0 my-auto text-center">
            <div className="display-6 text-white" id="header">Step One</div>
            <p className="fs-3 p-3 text-white" id="small-header">
              {" "}
              Choose an ethical issue that you would like to learn more about surrounding technology and computing. 
            </p>
          </Col>
        </Row>
        <Row
          ref={howItWorksRef2}
          className={`main-bg ${worksLoaded2 ? "unhideIt" : "hideIt"}`}
        >
          <Col
            className="p-0 my-auto text-center"

            xs={{ order: "last" }}
            sm
            md
            lg={{ order: "first" }}
            xl
            xxl
          >

            <div className="display-6 text-white" id="header" >Step Two</div>
            <p className="fs-3 p-3 text-white" id="small-header">
              {" "}
              Type the issue into the text field.
            </p>
          </Col>
          <Col className="p-0" xs={12} sm={12} md={12} lg xl xxl>
            <Image src="/employee.gif" className="img-fluid mx-auto"></Image>
          </Col>
        </Row>
        <Row
          ref={howItWorksRef3}
          className={`main-bg ${worksLoaded3 ? "unhideIt" : "hideIt"}`}
        >
          <Col className="p-0 " xs={12} sm={12} md={12} lg xl xxl>
            <Image src="/boss.jpg" className="img-fluid mx-auto"></Image>
          </Col>

          <Col className="p-0 my-auto text-center">
            <div className="">
              <div className="display-6 text-white" id="header">Step Three</div>
              <p className="fs-3 p-3 text-white" id="small-header">
                Select a button to see neutral, positive, or negative perspectives on the ethical issue.
              </p>
            </div>
          </Col>

        </Row>

        <Row
          ref={howItWorksRef4}
          className={`main-bg ${worksLoaded4 ? "unhideIt" : "hideIt"}`}
        >
     

          <Col className="p-0 my-auto text-center">
            <div className="">
              <div className="display-6 text-white" id="header">Step Four</div>
              <p className="fs-3 p-3 text-white" id="small-header">
                The output will display in the ChatGPT output box.  
              </p>
            </div>
          </Col>
          <Col className="p-0 " xs={12} sm={12} md={12} lg xl xxl>
            <Image src="/newImage.jpg" className="img-fluid mx-auto"></Image>
          </Col>

        </Row>
        
      </Container>

      {/* <Container> Commenting out for now
        <Row>
          <Col>
            <p className="display-4 text-center mt-4">Our Partners</p>
            <Carousel className="mt-4">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/google.png"
                  alt="Shrek slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/walmort.png"
                  alt="Second slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 mb-5 pb-   3 pt-0 "
                  src="/target.png"
                  alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container> */}

      <Container
        fluid
        ref={contactUsRef}
        className={`m-0 p-0`}
      >
        <Row className="contact_us m-0">
          <div className="display-6 text-center mt-3 mb-3 pt-3 text-light" id="header">About Us

          </div>

          <Col>

            <div id="small-header" className="fs-4 text-light">

              <p className="text-center">
                <strong id="header">Simon Park: </strong><br/> simonp@smu.edu
              </p>

            </div>
          </Col>
          <Col>

            <div id="small-header" className="fs-4 text-light">


              <p className="text-center">
                <strong id="header">Ethan Zech: </strong><br/> ezech@smu.edu
              </p>

            </div>
          </Col>
          <Col>

            <div id="small-header" >


              <p className="text-center">
                <strong className="fs-4 text-light" id="header">Noah Henson: </strong>
                <span className="fs-4 text-light"><br/> nbhenson@smu.edu</span>
              </p>

            </div>
          </Col>
          <div className="display-7 text-center mt-3 mb-3 pt-3 text-light" id="header">
            <p>This page was created by SMU Computer Science Students over three months for their Ethical Issues in Computing class.</p>
          </div>
        </Row>
      </Container >
    </>
  );
};

//These can all take the component to be changed as a second parameter if needed
// async function waitForNeutral(prompt) {
//   handleButtonClick;
//  //const result = await GetNeutralAIResponse(prompt);
//  //Whatever Text needs to be updated or variable needs to be called = result;
// }

async function waitForPositive(prompt) {
  const result = await GetPositiveAIResponse(prompt);
  //Whatever Text needs to be updated or variable needs to be called = result;
 }

 async function waitForNegative(prompt) {
  const result = await GetNegativeAIResponse(prompt);
  //Whatever Text needs to be updated or variable needs to be called = result;
 }
