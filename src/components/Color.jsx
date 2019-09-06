import React, { Component } from "react";

class Color extends Component {
  render() {
    return (
      <div>
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">Panel title</h3>
          </div>
          <div class="panel-body">
            <button type="button" class="btn btn-default">
              button
            </button>

            <button type="button" class="btn btn-default">
              button
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Color;
