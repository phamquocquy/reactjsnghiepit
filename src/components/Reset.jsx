import React, { Component } from "react";

class Reset extends Component {
  onResetDefault = () => {
    this.props.onResetDefault(true);
  };
  render() {
    return (
      <button
        type="button"
        className="btn btn-danger"
        onClick={this.onResetDefault}
      >
        button
      </button>
    );
  }
}

export default Reset;
