import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodoRequest, editTask, editTodoRequest } from "store/demo/action";

class Task extends Component {
  constructor(props) {
    super(props);
    this.editRef = React.createRef();
    this.state = {
      isEdit: false,
      data: null
    }
  }

  handleEditClick = () => {
    this.props.editTask(this.props.task.id);
  }

  handleSaveClick = () => {
    const newDescription = this.editRef.current.value;
    const id = this.props.task.id;
    this.props.editTodoRequest(id, { ...this.props.task, description: newDescription })
  }

  handleDeleteClick = () => {
    this.props.deleteTodoRequest(this.props.task.id);
  }

  handleChangeEdit = (event) => {
    console.log(event.target.value);
  }

  toggleTask = (event) => {
    const { task } = this.props;
    this.props.editTodoRequest(task.id, { ...task, completed: !task.completed})
  }

  render() {
    const { task } = this.props;
    return (
      <div className={`d-flex align-items-center`}>
        <input className="m-2" type="checkbox" onChange={this.toggleTask} checked={task.completed} />
        {task.isEditting !== true
          ?
          <React.Fragment>
            <div className={`flex-grow-1  ${task.completed ? "line-through" : ""}`}>{this.props.task.description}</div>
            <button className="btn btn-warning btn-sm" onClick={this.handleEditClick}><i className="fa fa-pen"></i></button>
          </React.Fragment>
          :
          <React.Fragment>
            <input className="flex-grow-1" defaultValue={this.props.task.description} onChange={this.handleChangeEdit} ref={this.editRef} />
            <button className="btn btn-success btn-sm" onClick={this.handleSaveClick}>Save</button>
          </React.Fragment>
        }
        <button className="btn btn-danger btn-sm" onClick={this.handleDeleteClick}><i className="fa fa-trash"></i></button>
      </div>
    )
  }
}

export default connect(null,
  {
    editTask,
    deleteTodoRequest,
    editTodoRequest
  })(Task);