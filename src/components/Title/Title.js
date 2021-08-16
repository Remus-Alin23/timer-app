import React from "react"

export const Title = ({ title, isInputBox }) => {
  return (
    <div className="d-flex Title">
      <h1 className="display-4 ">{title}</h1>
    </div>
  )
}
