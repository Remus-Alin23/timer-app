import React from "react"

export const Laps = ({ laps }) => {
  return (
    <ul className="list-group list-group-flush">
      {laps.map((lap, index) => {
        return (
          <li key={index} className="list-group-item">
            <h4>
              <span className="text-dark">{`Lap ${index}: `} </span>
              <span className="text-dark">Minute: </span>
              <span className="text-danger">{lap.min}</span>
              <span className="text-dark">Second: </span>
              <span className="text-danger">{lap.sec}</span>
              <span className="text-dark">Mili: </span>
              <span className="text-danger">{lap.mili}</span>
            </h4>
          </li>
        )
      })}
    </ul>
  )
}
