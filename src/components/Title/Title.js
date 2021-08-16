import React from "react"

export const Title = ({ title, isInputBox }) => {
  return isInputBox ? (
    <div className="Title">
      <input
        type="text"
        onChange={(event) => this.inputChange(event)}
        onKeyPress={(event) => this.keyPressHandler(event)}
        onBlur={(event) => this.blurhandler(event)}
        className="form-control"
        value={title}
      />
    </div>
  ) : (
    <div className="d-flex Title">
      <h1 className="display-4">{title}</h1>
      <span onClick={() => this.editHandler()} className="ml-auto editIcon">
        <i className="fas fa-pencil-alt"></i>
      </span>
    </div>
  )
}
