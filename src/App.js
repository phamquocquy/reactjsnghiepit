import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isDispalyForm: false
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }

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

  onToggleForm = () => {
    this.setState({
      isDispalyForm: !this.state.isDispalyForm
    });
  };

  onCloseForm = () => {
    this.setState({
      isDispalyForm: false
    });
  };

  onSubmit = data => {
    console.log(data);
    data.id = this.gennerateID();
    var { tasks } = this.state;
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onUpdataStatus = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  findIndex = id => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  onDelete = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };
  render() {
    var { tasks, isDispalyForm } = this.state;
    var elmTaskForm = isDispalyForm ? (
      <TaskForm onCloseForm={this.onCloseForm} onSubmit={this.onSubmit} />
    ) : (
      ""
    );
    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            <div
              className={
                isDispalyForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
              }
            >
              {elmTaskForm}
            </div>
            <div
              className={
                isDispalyForm
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onToggleForm}
              >
                <span className="fa fa-plus mr-5"></span>
                Thêm Công Việc
              </button>
              <div className="row mt-15">
                <Control></Control>
              </div>
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList
                    tasks={tasks}
                    onUpdataStatus={this.onUpdataStatus}
                    onDelete={this.onDelete}
                  ></TaskList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
