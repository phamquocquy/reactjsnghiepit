import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "yellow"]
    };
  }

  showColor = colr => {
    console.log(this.props.colorActive);
    return {
      backgroundColor: colr
    };
  };

  handleClick = color => {
    this.props.onReceiveColor(color);
  };

  render() {
    var elmColors = this.state.colors.map((colo, index) => {
      return (
        <div
          id="boxColor"
          key={index}
          style={this.showColor(colo)}
          className={this.props.colorActive === colo ? "active" : ""}
          onClick={() => this.handleClick(colo)}
        ></div>
      );
    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Panel title</h3>
        </div>
        <div className="panel-body rowBox">{elmColors}</div>
      </div>
    );
  }
}

export default Products;
