import React from "react"
import { Digit } from "../Digit"

export const Display = ({ timer }) => {
  return (
    <div className="d-flex pb-3">
      <Digit color="palegreen" value={timer.min} />
      <Digit color="skyblue" value={timer.sec} />
      <Digit color="salmon" value={timer.mili} />
    </div>
  )
}
