import { connect } from "react-redux";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE } from "store/filter/action";
import ListTask from "../ListTask";

const getVisibilityFilter = (todos, filter) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(task => !task.isComplete);
    case SHOW_COMPLETE:
      return todos.filter(task => task.isComplete);
    case SHOW_ALL:
      return todos;
    default:
      throw new Error("Filter not found");
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibilityFilter(state.todo.todos, state.visibilityFilter)
})

export default connect(mapStateToProps)(ListTask);
