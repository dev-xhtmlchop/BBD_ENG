import React from "react"
import * as style from "./about.module.css"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../buttons/Button"
import VideoPlayer from "../videoplayer/VideoPlayer "
function About({aboutContain,btn}) {
  return (
    <section className={`${style.py136} ${style.bgclr}`}>
      <div className="container about">
        <div className={style.mainboxwidth}>
          <Row className="align-items-lg-end align-items-center g-xl-0 gap-5 gap-lg-0  justify-content-between     ">
            <Col lg={4}>
              <div
                className={` text-white text-center text-lg-start  mx-auto   ms-md-0 ${style.leftcontain}`}
              >
                <div>
                <StaticImage
                    src="../../images/yellow_butterfly.svg"
                    alt="Buterfly_yellow"
                  />
                </div>
                <h2 className={` me-xl-4 fs_34  mb-0 ${style.mtheading}`}>
                  {aboutContain.title}
                </h2>
                <p className="mt-4">
                   {aboutContain.description}
                </p>
                <div className="mt-4  ">
                  <Button>{aboutContain.btn}</Button>
                </div>
              </div>
            </Col>
            <Col lg={8}  >
            
              <VideoPlayer />
              
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default About