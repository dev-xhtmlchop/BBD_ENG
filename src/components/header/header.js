import React, { useState } from "react"
import { Navbar, Container, Nav,   } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.css"
 import closebtn from '../../images/btnclose.png'
const Header = props => {
  const [showNotice, setShowNotice] = useState(true);

  const handleClose = () => {
    setShowNotice(false);
  };

  return (
    <>
    {showNotice && (
      <div className={styles.bg_notice} >
      <div className={`   text-center  mx-auto noticetop ${styles.noticetop}`}>
      <p>The tragic events unfolding in our global community can raise fears and anxiety. If you are impacted in any way by the current events, make an appointment with a virtual counsellor today. To access 2 free hours of counselling, log into your People Connect account and send a message to <b>support@pcpeopleconnect.com</b>  or send a message through the live chat function.</p>
      
      <button onClick={handleClose} className={`border-0 bg-transparent ${styles.closebtn}`} > 
      <img src={closebtn} alt="closebtn" className="img-fluid" />
      </button>
    </div> 
      </div>
    )}
    <Navbar expand="lg" sticky="top" bg="white" className={ styles.shadow_nav} >
      <Container>
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="me-0 p-0">
            <div className="img-fluid">
              <StaticImage
                className={styles.logosize}
                src="../../images/logo_english.png"
                alt="Benefits By Design and People Connect EAP powered by People Corporation logo"

              />
            </div>
          </Navbar.Brand>
          <div className={styles.vertical}></div>
          <div>
            <img
              className={styles.logorightsideimg}
              src={require(`../../images/${props.img}`).default}
              alt="Benefits By Design and People Connect EAP powered by People Corporation logo"
            />
          </div>
        </div>
        <div  className="d-flex">
        <div className={ styles.vertical_line} ></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className={ ` ${styles.toogleicon}` }/>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <div className="d-lg-flex d-block gap-5">
              <div className="d-flex justify-content-between align-items-center  gap-5 "> 
                <Nav.Link   href="https://bbdeap.pcpeopleconnect.com/signin" target="self" className="fw-bold">
                  Sign In
                </Nav.Link>
                <div className="d-flex gap-4 align-items-center">
                <a href="#/" className={` fs-6 fw-bold fw-light ${ styles.cursorpointer}`} >EN</a><span>|</span><a href={props.link} className={`fs-6 ${ styles.cursorpointer}`}>FR</a>
                </div>
                {/* </Nav.Link> */}
              </div>
              <div className="mt-2 mt-lg-0 d-none d-lg-block">
                <Nav.Link 
                   href="https://bbdpae.peoplevousconnecte.com/signup"
                  className={` d-inline-block  nav_btn px-5 py-2 rounded-2 fw-bold ${styles.nav_btn_getstart}`}
                >
                  Get Started
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
