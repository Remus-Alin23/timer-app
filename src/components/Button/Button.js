import React from "react"

export const Button = ({ title, handleClick }) => {
  let classlist = "btn btn-lg px-5 ml-5 "

  //Button style
  switch (title) {
    case "Start":
      classlist += "btn-success"
      break
    case "Resume":
      classlist += "btn-success"
      break
    case "Pause":
      classlist += "btn-primary"
      break
    case "Reset":
      classlist += "btn-danger"
      break
    case "Stop":
      classlist += "btn-danger"
      break
    case "Lap":
      classlist += "btn-warning"
      break

    default:
      classlist += "btn-primary"
      break
  }

  return (
    <button className={classlist} onClick={() => handleClick()}>
      {title}
    </button>
  )
}
