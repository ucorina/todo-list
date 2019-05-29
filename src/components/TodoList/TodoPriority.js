import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TODO_PRIORITY } from "../../constants/todos";

const PRIORITY_COLOR = {
  [TODO_PRIORITY.HIGH]: "red",
  [TODO_PRIORITY.NORMAL]: "orange",
  [TODO_PRIORITY.LOW]: "yellow"
};

const useStyles = makeStyles(theme => ({
  priority: ({ value }) => ({
    display: "block",
    width: "0.7em",
    height: "1.5em",
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
    />
  );
};

export default TodoPriority;
