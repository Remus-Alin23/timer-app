import React from "react"

export const Controls = ({ start, pause, reset }) => {
  return (
    <>
      <button
        className="btn btn-primary btn-lg px-5 ml-5"
        onClick={(event) => this.pauseHandller(event)}
      >
        Pause
      </button>

      <button
        className="btn btn-warning btn-lg px-5 ml-5"
        onClick={(event) => this.lapHandller(event)}
      >
        Lap
      </button>
    </>
  )
}
