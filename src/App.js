import React, { Component } from "react";
import "./App.css";
// import Header from "./components/Header";
import Products from "./components/Products";
import Color from "./components/Color";
import Content from "./components/Content";
import Reset from "./components/Reset";

class App extends Component {
  state = {
    color: "red",
    fontSize: 15
  };

  setColor = color => {
    this.setState({
      color: color
    });
  };

  onChangeSize = value => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  };

  onResetDefault = value => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 15
      });
    }
  };
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Products
              colorActive={this.state.color}
              onReceiveColor={this.setColor}
            />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Color
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset onResetDefault={this.onResetDefault} />
          </div>
          <div>
            <Content color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
