import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

export default class Control extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <Sort></Sort>
      </div>
    );
  }
}
