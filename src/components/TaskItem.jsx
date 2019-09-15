import React, { Component } from "react";
export default class TaskItem extends Component {
  onUpdataStatus = () => {
    this.props.onUpdataStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
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
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span>Sửa
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
