import React from 'react'
import { Col } from 'react-bootstrap'
 

function ServiceBoxes(props) {
  return (
        <Col lg={3} key={props.index} className="">
          <div className="py-4 px-2 border  border-black  rounded-2 d-flex h-100 align-items-center justify-content-center">
            <h4>{props.content}</h4>
          </div>
        </Col>
  )
}

export default ServiceBoxes
