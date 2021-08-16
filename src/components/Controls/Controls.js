import React from "react"
import { Button } from "../Button/Button"

export const Controls = ({ buttons }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <Button
          key={index}
          type={button.type}
          title={button.title}
          handleClick={button.handleClick}
        />
      ))}
    </>
  )
}
