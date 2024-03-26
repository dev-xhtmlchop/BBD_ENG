import React from 'react'
import { Col, Row } from 'react-bootstrap'
import * as style from './footer.module.css' 
function FooterComponent({bgcolor,boderclr}) {
  return (
    <section className={`${style.pySpace} border-top ${boderclr}  ${bgcolor}`}>

    <div className='container  '>
    <div className='text-white text-center bg'>
    <Row className={` justify-content-between row-gap-3 ${style.fontsize_footer}`} >
        <Col md={6} xl={5}>
            <div className='d-md-flex  gap-4'>
                <a href="https://pcpeopleconnect.com/privacy" className='cursor-pointer text-white d-block d-md-inline-block mb-3 mb-md-0'>PRIVACY POLICY</a>
                <a href="https://pcpeopleconnect.com/conditions" className='cursor-pointer text-white'>TERMS & CONDITIONS</a>
            </div>
        </Col>
        <Col md={5} xl={3}>
            <p>PC People Connect & BBD © 2023-2024</p>
        </Col>
      </Row>
    </div>
    </div>
    </section>
  )
}

export default FooterComponent
