import { connect } from "react-redux";
import { toggleTodoStatus, deleteTodo } from "../actions/todos";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todoItems: state.todos.list.sort((a, b) => a.priority - b.priority),
  errorMessage: state.todos.errorMessage,
  isLoading: state.todos.isLoadingTodoList
});

const mapDispatchToProps = dispatch => ({
  onItemToggled: id => dispatch(toggleTodoStatus(id)),
  onItemDeleted: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
