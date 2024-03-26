import React from "react"
import * as style from "./accountcreateguide.module.css"
import { Col, Row } from "react-bootstrap"
 
function AccountCreateGuide({guidedata}) {
  return (
    <section className={style.pySpace}>
      <div className="container px-3 ">
        <Row>
          <Col>
            <div className="text-center">
              <h2 className="fw-bold">Getting started is easy</h2>
            </div>
          </Col>
        </Row>
        <Row
          className={`${style.cardtopspace} justify-content-between ${style.rowgap} ${style.mainbox}`}
        >
        {
          guidedata && guidedata.map((ele,index)=>{
            return(
              <Col lg={4} key={index} className={`${style.card_size} px-lg-0 `}>
            <div
              className={` position-relative border rounded-2 text-center ${style.cardstyle}`}
            >
              <div className={style.cardnumber}>{ele.number} </div>
              <div className={style.spaceheading}>
                <h5 className={` fw-semibold mx-auto ${style.mx_contain}`} >{ele.contain}</h5>
              </div>
              <div>
                <img
                  className="w-100"
                  src={require(`../../images/${ele.img}`).default }
                  alt="card1"
                />
              </div>
            </div>
          </Col>
            )
          })
        }
          
        </Row>
        <div className={` text-center ${style.mt_76} d-none d-lg-block`} >
          <p className="fs-5">Having trouble signing up? <a href="#/" className="fw-bold text-decoration-underline">Get Support</a> </p>
        </div>
      </div>
    </section>
  )
}

export default AccountCreateGuide
