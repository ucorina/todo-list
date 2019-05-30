import React, { Fragment } from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Typography from "@material-ui/core/Typography";

const TodoListPage = () => (
  <Fragment>
    <Typography
      component="h2"
      variant="h3"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      Todo list
    </Typography>
    <AddTodo />
    <TodoList />
  </Fragment>
);

export default TodoListPage;
