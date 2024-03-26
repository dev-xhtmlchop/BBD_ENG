import React from "react"
import * as style from "./support.module.css"
import { Col, Row } from "react-bootstrap"
import Button from "../buttons/Button" 
import buuterfly from "../../images/left_butterfly.svg"
import leftbutterfly from "../../images/leftsupportbutterfly.svg"
import rightbutterfly from "../../images/supportbutterfly.svg"
function Support(props) {
 
  const { subcontain, btnbg, supportbg, rightpng, leftpng,buuterflyleft ,title,btn } = props
  return (
    <section className={`position-relative   ${supportbg} ${style.pySpace}`}>
      <div
        className={` d-none  position-absolute  ${leftpng}  ${style.butterflyright}`}
      > 
        <img src={rightbutterfly} className="img-fluid" alt="eap supportpage right side butterfly" />
      </div>
      <div className={`position-absolute  ${style.buuterflyleft} ${buuterflyleft}`}>
        <img src={buuterfly} alt=" " className={``} />
      </div>
      <div
        className={`  d-lg-none  text-center ${rightpng} ${style.butterflyleft}`}
      >
        <img src={leftbutterfly} alt="" className="img-fluid" />
      </div>
      <div className="container">
        <Row className="justify-content-center">
          <Col>
            <div className={`  text-center ${style.support_contain} text-white position-relative`} >
              <h2 className="mb-3  fs_35 ">{title}</h2>
              <p className="">{subcontain}</p>
              <div className={style.mt_27}>
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
