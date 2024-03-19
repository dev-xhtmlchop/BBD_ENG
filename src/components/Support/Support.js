import React from "react"
import * as style from "./support.module.css"
import { Col, Row } from "react-bootstrap"
import Button from "../buttons/Button"
import { StaticImage } from "gatsby-plugin-image"
function Support(props) {
 
  const { subcontain, btnbg, supportbg, rightpng, leftpng,title,btn } = props
  return (
    <section className={`position-relative   ${supportbg} ${style.pySpace}`}>
      <div
        className={`position-absolute d-none  ${leftpng}  ${style.butterflyright}`}
      >
        <StaticImage
          src="../../images/supportbutterfly.svg"
          alt="supportbutterfly"
        />
      </div>
      <div
        className={`position-absolute d-none  ${rightpng} ${style.butterflyleft}`}
      >
        <StaticImage
          src="../../images/leftsupportbutterfly.svg"
          alt="supportbutterfly"
        />
      </div>
      <div className="container">
        <Row className="justify-content-center">
          <Col>
            <div className={`  text-center ${style.support_contain} text-white position-relative`} >
              <h2 className="mb-3  fs_35 ">{title}</h2>
              <p className="">{subcontain}</p>
              <div className="mt-4">
                <Button bgwhite={btnbg}>{btn}</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Support
