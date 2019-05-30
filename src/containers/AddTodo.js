import { connect } from "react-redux";
import { addTodo } from "../actions/todos";
import AddTodo from "../components/AddTodo";

const mapDispatchToProps = dispatch => ({
  onItemAdded: item => dispatch(addTodo(item))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
