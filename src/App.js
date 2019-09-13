import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onHandleChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    console.log(target);
    this.setState({
      [name]: value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">form</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                  <label>user name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onHandleChange}
                  />
                </div>
                <div className="form-group">
                  <label>password</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    onChange={this.onHandleChange}
                  />
                </div>

                <button type="submit" className="btn btn-default">
                  lưu lại
                </button>
                <button type="button" className="btn btn-default">
                  xóa trắng
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
