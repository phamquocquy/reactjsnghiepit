import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      status: false
    };
  }

  componentWillMount() {
    if (this.props.editTask && this.props.editTask.id != null) {
      this.setState({
        id: this.props.editTask.id,
        name: this.props.editTask.name,
        status: this.props.editTask.status
      });
    }else{
      this.onClear()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editTask) {
      this.setState({
        id: nextProps.editTask.id,
        name: nextProps.editTask.name,
        status: nextProps.editTask.status
      });
    }else{
      this.onClear()
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false
    });
  };
  render() {
    var { id } = this.state;
    if(!this.props.isDispalyForm) return '';
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Cập nhật công việc" : "Thêm Công Việc"}
            <span
              className="fa fa-times-circle text-right"
              style={{ float: "right" }}
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDispalyForm: state.isDisplayForm,
    editTask: state.editTask
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: task => {
      dispatch(actions.onSaveTask(task));
    },
    onToggle: () => {
      dispatch(actions.toggleForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
