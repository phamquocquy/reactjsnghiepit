import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(tasks);
      this.setState({
        tasks: tasks
      });
    }
  }

  onGennerateData = () => {
    var tasks = [
      {
        id: this.gennerateID(),
        name: "học lập trình php",
        status: true
      },
      {
        id: this.gennerateID(),
        name: "học lập trình java",
        status: false
      },
      {
        id: this.gennerateID(),
        name: "học lập trình javascript",
        status: false
      },
      {
        id: this.gennerateID(),
        name: "học lập trình python",
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  gennerateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4()
    );
  }
  render() {
    var { tasks } = this.state;
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
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onGennerateData}
              >
                <span className="fa fa-plus mr-5"></span>Generate data
              </button>
              <div className="row mt-15">
                <Control></Control>
              </div>
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList tasks={tasks}></TaskList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
