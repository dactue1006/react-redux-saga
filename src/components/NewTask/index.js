import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTask } from "store/todo/action";
import { postTodosRequest } from "store/demo/action";

class Task extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.value) {
      this.props.postTodosRequest({description: this.state.value})
      this.props.addNewTask(this.state.value);
      this.setState({
        value: ""
      })
      this.myRef.current.value = "";
    } else {
      alert("please type input")
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="d-flex align-items-center">
        <input 
          type="text" 
          id="exampleForm2" 
          className="form-control" 
          onChange={this.handleChange} 
          ref={this.myRef}
        />
        <button className="btn btn-primary btn-md" onClick={this.handleClick}><i className="fa fa-plus"></i></button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (description) => {
      dispatch(addNewTask(description)) 
    },
    postTodosRequest: (data) => {
      dispatch(postTodosRequest(data))
    }
  }
}
export default connect(null, mapDispatchToProps)(Task);
