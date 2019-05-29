import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Container from "@material-ui/core/Container";
import { formatRelative } from "date-fns";
import TodoPriority from "./TodoPriority";
import TodoDueTime from "./TodoDueTime";

const useStyles = makeStyles(theme => ({
  checkboxIcon: {
    minWidth: "auto"
  },
  todoItemCompleted: {
    textDecoration: "line-through"
  }
}));

const TodoList = ({ todoItems, onItemToggled, onItemDeleted }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <List>
        {todoItems.map(todo => (
          <ListItem
            key={todo.id}
            dense
            button
            onClick={() => onItemToggled(todo.id)}
          >
            <ListItemIcon className={classes.checkboxIcon}>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <TodoPriority value={todo.priority} />

            <ListItemText
              primary={todo.text}
              secondary={
                todo.dueTime ? formatRelative(todo.dueTime, new Date()) : null
              }
              primaryTypographyProps={{
                className: todo.completed ? classes.todoItemCompleted : null
              }}
            />

            <TodoDueTime {...todo} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="Delete"
                onClick={() => onItemDeleted(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
