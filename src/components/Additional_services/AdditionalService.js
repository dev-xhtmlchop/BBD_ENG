import React from "react"
import * as style from "./additional.module.css"
import { Col, Row } from "react-bootstrap" 
import warninghand from "../../images/warninghand.svg"
import rightbuuterfly from "../../images/yellow_butterfly_right.svg"
function AdditionalService() {
  return (
    <section
      className={`position-relative ${style.backgroundclr} ${style.pySpace}`}
    >
      <div className="container">
        <Row className={` align-items-center row-gap-5 justify-content-between ${style.mainBox}`}>
          <Col lg={6} className={`px-lg-0  ${style.additional_conatainbox}`}>
            <div className="text-center text-lg-start">
              <h4 className={ style.additional_title }>Additional services</h4>
              <p className={` mt-3  ${style.additional_description}`} >
                Unexpected events happen and when they do, BBD offers Critical
                Incident Support Services in times of need.
              </p>
            </div>
          </Col>
          <Col lg={6} className= {`px-lg-0 ${style.additional_warningbox}`}>
            <div
              className={`d-flex flex-column flex-md-row align-items-center gap-4  text-center text-md-start ${style.warning_box} rounded-4 ${style.warningboxbg}`}
            >
              <div className="flex-shrink-0"> 
                <img src={warninghand} alt=" " />
              </div>
              <div>
                <h5  className= {`text-white ${style.warning_title}`}>
                  Critical incident support services
                </h5>
                <p className={` mt-4 ${style.warning_notinclude}`}>
                  Not Included. Fee for service.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`d-none d-lg-block position-absolute ${style.butterflyright}`}>
        <img src={rightbuuterfly} alt="" />
      </div>
    </section>
  )
}

export default AdditionalService
