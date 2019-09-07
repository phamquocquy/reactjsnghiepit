import React, { Component } from "react";

class Color extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">font size {this.props.fontSize}px</h3>
          </div>
          <div className="panel-body">
            <button type="button" className="btn btn-default">
              tăng
            </button>

            <button type="button" className="btn btn-default">
              giảm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Color;
