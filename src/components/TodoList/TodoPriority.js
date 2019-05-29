import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TODO_PRIORITY } from "../../constants/todos";

const PRIORITY_COLOR = {
  [TODO_PRIORITY.HIGH]: "red",
  [TODO_PRIORITY.NORMAL]: "orange",
  [TODO_PRIORITY.LOW]: "yellow"
};

const PRIORITY_TITLE = {
  [TODO_PRIORITY.HIGH]: "High priority",
  [TODO_PRIORITY.NORMAL]: "Normal priority",
  [TODO_PRIORITY.LOW]: "Low priority"
};

const useStyles = makeStyles(theme => ({
  priority: ({ value }) => ({
    display: "block",
    width: "0.7em",
    height: "2em",
    backgroundColor: PRIORITY_COLOR[value],
    marginRight: theme.spacing(1)
  })
}));

const TodoPriority = ({ value }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.priority}
      style={{ backgroundColor: PRIORITY_COLOR[value] }}
      title={PRIORITY_TITLE[value]}
    />
  );
};

export default TodoPriority;
