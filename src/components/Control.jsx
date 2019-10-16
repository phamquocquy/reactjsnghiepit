import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

export default class Control extends Component {
  render() {
    return (
      <div>
        <Search onSearch={this.props.onSearch}></Search>
        <Sort
          onSort={this.props.onSort}
          by={this.props.by}
          value={this.props.value}
        ></Sort>
      </div>
    );
  }
}
