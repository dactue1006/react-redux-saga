import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodosRequest } from "store/demo/action";
import Task from "../Task";

class App extends Component {
  componentDidMount() {
    this.props.getTodosRequest();
  }
  renderListTask = () => {
    const { todos } = this.props.demo;
    return (
      todos.map((task, index) => {
        return <Task key={index} task={task} />
      })
    )
  }

  render() {
    console.log("demo", this.props.demo.todos);
    if (!this.props.demo.todos) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className="App">
        Task ne
        {this.renderListTask()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    demo: state.demo
  };
};


export default connect(mapStateToProps, { getTodosRequest })(App);