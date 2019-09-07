import React, { Component } from "react";

class Content extends Component {
  setColor = () => {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  };
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-xs-12">
        <p style={{ color: this.props.color }}>
          color- {this.props.color} fontsize {this.props.fontSize}px
        </p>
        <div id="noidung" style={this.setColor()}>
          noi dung bai học
        </div>
      </div>
    );
  }
}

export default Content;
