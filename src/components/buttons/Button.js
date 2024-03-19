import React from "react"
import * as style from "./button.module.css"
function Button({ children, bgwhite }) {
  return (
    <a href="#/" className={`${bgwhite} ${style.btn}`}>
      {children}
    </a>
  )
}

export default Button
