import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

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
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm></TaskForm>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button type="button" className="btn btn-primary">
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              <div className="row mt-15">
                <Control></Control>
              </div>
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList></TaskList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
