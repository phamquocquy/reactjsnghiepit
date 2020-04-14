import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class TaskItem extends Component {
  onUpdataStatus = () => {
    this.props.onUpdataStatus(this.props.task.id)
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm()
  };

  onUpdate = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "label label-danger"
                : "label label-success"
            }
            onClick={this.onUpdataStatus}
          >
            {task.status === true ? "Kích Hoạt" : "ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <span className="fa fa-pencil mr-5"></span>
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdataStatus: (id) => {
      dispatch(actions.updateState(id))
    },
    onDelete: (id) => {
      dispatch(actions.deleteTask(id))
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskItem);
