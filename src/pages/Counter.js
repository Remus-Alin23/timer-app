import React, { useState, useEffect, useRef } from "react"
import { Title, Display, Controls, Laps } from "../components"
import { useInterval } from "../hooks/useInterval"
import "bootstrap/dist/css/bootstrap.css"

const initialTime = { min: 0, sec: 0, mili: 0 }

export const Counter = () => {
  const [timer, setTimer] = useState(initialTime)
  const [laps, setLaps] = useState([])
  const [buttons, setButtons] = useState([])
  const [isRunning, setIsRunning] = useState(false)

  //Keep a mutable object with the current state(for laps).
  const timerRef = useRef()
  timerRef.current = timer

  const handleStart = () => {
    setIsRunning(true)
    setTimer(initialTime)
    setLaps([])
    setButtons([
      {
        title: "Pause",
        handleClick: handlePause,
      },
      {
        title: "Lap",
        handleClick: handleLaps,
      },
      {
        title: "Stop",
        handleClick: handleStop,
      },
    ])
  }
  const handlePause = () => {
    setIsRunning(false)
    setButtons([
      {
        title: "Resume",
        handleClick: handleResume,
      },
      {
        title: "Reset",
        handleClick: handleReset,
      },
    ])
  }
  const handleResume = () => {
    setIsRunning(true)
    setButtons([
      {
        title: "Pause",
        handleClick: handlePause,
      },
      {
        title: "Lap",
        handleClick: handleLaps,
      },
      {
        title: "Stop",
        handleClick: handleStop,
      },
    ])
  }
  const handleReset = () => {
    setIsRunning(false)
    setTimer(initialTime)
    setLaps([])
    setButtons([
      {
        title: "Start",
        handleClick: handleStart,
      },
    ])
  }
  const handleStop = () => {
    setIsRunning(false)
    setLaps(prevLaps => [...prevLaps, { ...timerRef.current }])
    setButtons([
      {
        title: "Start",
        handleClick: handleStart,
      },
    ])
  }
  const handleLaps = () => {
    setLaps(prevLaps => [...prevLaps, { ...timerRef.current }])
  }

  //Init the controls after component mounts(aka Start button).
  useEffect(() => {
    setButtons([
      {
        title: "Start",
        handleClick: handleStart,
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Timer function using custom hook >>> useInterval(callback, delay).
  useInterval(
    () => {
      const newTimer = { ...timer }
      newTimer.mili += 1
      if (newTimer.mili >= 10) {
        newTimer.sec = newTimer.sec + 1
        newTimer.mili = 0
      }
      if (newTimer.sec >= 60) {
        newTimer.min = newTimer.min + 1
        newTimer.sec = 0
      }
      setTimer(newTimer)
    },
    isRunning ? 100 : null
  )

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <Title title="Counter App" />
          <Display timer={timer} />
          <Controls buttons={buttons} />
          <Laps laps={laps} />
        </div>
      </div>
    </div>
  )
}
