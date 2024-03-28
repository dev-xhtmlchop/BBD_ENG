import React from "react"
import * as style from "./bapservices.module.css"
import { StaticImage } from "gatsby-plugin-image"
import ServiceBoxes from "./ServiceBoxes"
import { Row } from "react-bootstrap"
import Button from "../buttons/Button"
function BapServices({serviceBoxData,btnlink}) {
 
  return (
    <section
      className={`position-relative ${style.bgservice} ${style.pySpace}`}
    >
      <div className="position-absolute start-0 bottom-0 d-none d-lg-block">
        <StaticImage
          src="../../images/bap_service_butterfly.svg"
          alt=" "
        />
      </div>
      <div className="container px-4 px-lg-2">
        <div className={style.headingwidth}>
          <div className="text-center">
            
            <h2 className={style.title_bapservices}>Get access to these services with BBD</h2>
          </div>
        </div>

        {/* Start service box */}
        <Row
          className={` row-gap-3 justify-content-between row-gap-lg-0 ${style.mainboxsize}   text-center`}
        >
          {serviceBoxData.map((ele, index) => {
            return <ServiceBoxes key={index} index={index} content={ele.content} />
          })}
        </Row>
        {/* End service box */}

        <div className={` text-center  ${style.business_owner}`}>
          <p className= {`mx-0 mx-lg-5  ${style.service_que}`}>
            Are you a business owner?{" "}
            <span className="  fw-bold">
              We also offer Legal, Financial and People support for you too!
            </span>
          </p>
        </div>

        <div className={`text-center `}>
          <Button btnlink={btnlink} bgwhite="bg-white">Get Started</Button>
        </div>
      </div>
    </section>
  )
}

export default BapServices
