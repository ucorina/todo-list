import { connect } from "react-redux";
import { addTodo } from "../actions";
import AddTodo from "../components/AddTodo";

const mapDispatchToProps = dispatch => ({
  onItemAdded: ({ text, priority }) => dispatch(addTodo(text, priority))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
