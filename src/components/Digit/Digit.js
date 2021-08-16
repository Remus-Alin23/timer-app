import React from "react"
import "./Digit.css"

export const Digit = ({ color, value }) => {
  return (
    <div className="Digit mx-3 text-center" style={{ borderColor: color }}>
      <h1 className="display-2 py-3" style={{ border: color }}>
        {value < 10 ? `0${value}` : value}
      </h1>
    </div>
  )
}
