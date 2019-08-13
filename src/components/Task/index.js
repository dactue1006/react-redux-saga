import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask, editTask, saveEditTask, toggleTask } from "store/todo/action";

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
    this.props.saveEditTask(id, newDescription);
  }

  handleDeleteClick = () => {
    this.props.deleteTask(this.props.task.id);
  }

  handleChangeEdit = (event) => {
    console.log(event.target.value);
  }

  toggleTask = (event) => {
    this.props.toggleTask(this.props.task.id);
    console.log(event.target.checked);
  }
  render() {
    const { task } = this.props;

    return (
      <div className={`d-flex align-items-center`}>
        <input className="m-2" type="checkbox" onChange={this.toggleTask} checked={task.isComplete} />
        {!task.isEditting
          ?
          <React.Fragment>
            <div className={`flex-grow-1  ${task.isComplete ? "line-through" : ""}`}>{this.props.task.description}</div>
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

export default connect(null, { deleteTask, editTask, saveEditTask, toggleTask })(Task);