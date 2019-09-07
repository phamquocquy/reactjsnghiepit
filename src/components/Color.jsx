import React, { Component } from "react";

class Color extends Component {
  changeSize = size => {
    this.props.onChangeSize(size);
  };
  render() {
    return (
      <div>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">font size {this.props.fontSize}px</h3>
          </div>
          <div className="panel-body">
            <button
              type="button"
              className="btn btn-default"
              onClick={() => this.changeSize(+2)}
            >
              tăng
            </button>

            <button
              type="button"
              className="btn btn-default"
              onClick={() => this.changeSize(-2)}
            >
              giảm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Color;
