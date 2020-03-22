import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskEditing: null,
      filter: {
        name: "",
        status: -1
      },
      keyWord: "",
      by: "name",
      value: 1
    };
  }

  componentDidMount() {
    console.log(this.props, 'propsssss')
  }

  onToggleForm = () => {
    this.props.onToggle();

    // if (this.state.isDispalyForm && this.state.taskEditing !== null) {
    //   this.setState({
    //     isDispalyForm: true,
    //     taskEditing: null
    //   });
    // } else {
    //   this.setState({
    //     isDispalyForm: !this.state.isDispalyForm,
    //     taskEditing: null
    //   });
    // }
  };

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onShowForm = () => {
    this.setState({
      isDispalyForm: true
    });
  };

  onUpdate = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  };

  onSearch = keyWord => {
    this.setState({
      keyWord: keyWord
    });
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      by: sortBy,
      value: sortValue
    });
  };
  render() {
    var {
      by,
      value
    } = this.state;
    //console.log(this.props, "aaaaa");
    var { isDispalyForm } = this.props;
    console.log('render', this.props);
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter(task => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   tasks = tasks.filter(task => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }
    // if (keyWord) {
    //   tasks = tasks.filter(task => {
    //     return task.name.toLowerCase().indexOf(keyWord) !== -1;
    //   });
    // }
    // if (by === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return value;
    //     else if (a.status < b.status) return value;
    //     else return 0;
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return value;
    //     else if (a.name < b.name) return value;
    //     else return 0;
    //   });
    // }
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
              <TaskForm />
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
                Thêm Công Việc test
              </button>
              <div className="row mt-15">
                <Control
                  onSearch={this.onSearch}
                  onSort={this.onSort}
                  by={by}
                  value={value}
                ></Control>
              </div>
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList
                    onFilter={this.onFilter}
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

const mapStateToProps = state => {
  return {
    isDispalyForm: state.isDisplayForm
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggle: () => {
      dispatch(actions.toggleForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
