import { connect } from "react-redux";
import { toggleTodoStatus, deleteTodo } from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todoItems: state.todos.sort((a, b) => a.priority - b.priority)
});

const mapDispatchToProps = dispatch => ({
  onItemToggled: id => dispatch(toggleTodoStatus(id)),
  onItemDeleted: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
