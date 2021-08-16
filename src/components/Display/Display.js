import React from "react"
import { Digit } from "../Digit"

export const CountDown = () => {
  return (
    <div className="d-flex">
      <Digit color="palegreen" value={props.time.min} />
      <Digit color="skyblue" value={props.time.sec} />
      <Digit color="salmon" value={props.time.mili} />
    </div>
  )
}
