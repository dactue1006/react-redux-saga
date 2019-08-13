import React from "react";
import Task from "../Task";

const ListTask = (props) => {
  let renderListTask = () => {
    const { todos } = props;
    return (
      todos.map((task, index) => {
        return <Task key={index} task={task} />
      })
    )
  }

  return (
    <div>
      {renderListTask()}
    </div>
  )
}

export default ListTask;


