import React from "react"
import { Col, Row } from "react-bootstrap"
import * as style from "./home.module.css"

function Home(props) {
  const { orderl, orderf, img, shapeimg, homepageData, meauto,imgpart ,eap_contain,lscontain,bap_py,mt} = props

  return (
    <section className="position-relative">
      <div className="position-absolute bottom-0  w-100 ">
        <div className="w-100">
          <img className="w-100 img-fluid" src={shapeimg} alt="shape" />
        </div>
      </div>
      <div className={`  ${bap_py ? style.bap_py : style.py20}`}>
          <div className={`${bap_py ?    style.sidespcebap : style.sidespceeap} `}>
        <div className="container px-3 px-lg-3">
            <Row className=" position-relative justify-content-center justify-content-lg-between align-items-start">
              <Col   lg={6} className={` ${mt ? 'mt-5' : " "} ${imgpart ?  `${style.imgpart}` : ""} ${orderl}`}>
                <img className="img-fluid" src={img} alt={homepageData.alt} />
              </Col>
              <Col   lg={6} className={`   ${orderf} ${mt ? "mt-5" : ""} ${bap_py ? "mt-4" : "" } ${eap_contain ? style.eap_contain: ""}`}>
                <div
                  className={`text-center text-lg-start  mx-auto ms-lg-0   ${meauto}  ${ lscontain ?  style.lscontain  : style.rsconatin }`}
                >
                  <p className= {`text_primary fw-bold ${style.subtitle}`} >{homepageData.subtitle}</p>
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
