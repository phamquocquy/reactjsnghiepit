import React, { Component } from "react";
import { thisExpression } from "@babel/types";

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors : ['red','green','blue','yellow']
    }
  }

  showColor(color){
    return {
      backgroundColor: color
    }
  }
  render() {
    var elmColors = this.state.colors.map((color, index ) => {
      return <span id='boxColor' key={index} style={this.showColor(color)}></span>
    })
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Panel title</h3>
        </div>
        <div className="panel-body">
          {elmColors}
        </div>
      </div>
    );
  }
}

export default Products;
