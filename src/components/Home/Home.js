import React from "react"
import { Col, Row } from "react-bootstrap"
import * as style from "./home.module.css"

function Home(props) {
  const { orderl, orderf, img, shapeimg, homepageData, meauto,imgpart } = props

  return (
    <section className="position-relative">
      <div className="position-absolute bottom-0  w-100 ">
        <div className="w-100">
          <img className="w-100 img-fluid" src={shapeimg} alt="shape img" />
        </div>
      </div>
      <div className={style.py20}>
        <div className="container">
          <div className={style.sidespce}>
            <Row className="g-5 g-md-4 g-lg-0 position-relative justify-content-center justify-content-lg-between align-items-start">
              <Col sm={8} md={6} className={`${imgpart ? style.imgpart : ""} ${orderl}`}>
                <img className="img-fluid" src={img} alt="Manager giving a document to employee sitting at desk. Employee is sitting in front of their computer." />
              </Col>
              <Col md={6} className={`px-0 px-md-0 ${orderf}`}>
                <div
                  className={`text-center text-lg-start  ${meauto} ${style.rsconatin}`}
                >
                  <p className="text_primary fw-bold">{homepageData.subtitle}</p>
                  <h1 className="fw-bold mt-3">{homepageData.title}</h1>
                  <p className={style.rsdescription}>
                    {homepageData.description} 
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
