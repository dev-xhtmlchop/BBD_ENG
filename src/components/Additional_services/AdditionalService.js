import React from "react"
import * as style from "./additional.module.css"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
function AdditionalService() {
  return (
    <section
      className={`position-relative ${style.backgroundclr} ${style.pySpace}`}
    >
      <div className="container">
        <Row className={` align-items-center row-gap-5 ${style.mainBox}`}>
          <Col lg={6}>
            <div>
              <h4>Additional services</h4>
              <p className="mt-3 text-start">
                Unexpected events happen and when they do, BBD offers Critical
                Incident Support Services in times of need.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className={`d-flex gap-4 py-4 px-3 rounded-4 ${style.warningboxbg}`}
            >
              <div className="flex-shrink-0">
                <StaticImage src="../../images/warninghand.svg" />
              </div>
              <div>
                <h5 className="text-white">
                  Critical incident support services
                </h5>
                <p className="text-warning mt-4">
                  Not Included. Fee for service.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default AdditionalService
