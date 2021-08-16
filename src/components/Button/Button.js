import React from "react"
//type: start pause reset
export const Button = ({ title, type, onClick }) => {
  return (
    <button
      className="btn btn-success btn-lg px-5 ml-5"
      onClick={(event) => this.startHandller(event)}
    >
      {title}
    </button>
  )
}
