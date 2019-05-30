import React, { Component } from "react";
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
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

const styles = theme => ({
  checkboxIcon: {
    minWidth: "auto"
  },
  todoItemCompleted: {
    textDecoration: "line-through"
  },
  snackbar: {
    backgroundColor: theme.palette.error.dark
  }
});

class TodoList extends Component {
  state = {
    isSnackBarClosed: false
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage !== this.props.errorMessage) {
      this.setState({ isSnackBarClosed: false });
    }
  }
  handleSnackBarClosed = () => {
    this.setState({
      isSnackBarClosed: true
    });
  };
  render() {
    const {
      todoItems,
      onItemToggled,
      onItemDeleted,
      classes,
      errorMessage,
      isLoading
    } = this.props;
    const isSnackBarOpen =
      !this.state.isSnackBarClosed && !!this.props.errorMessage;
    return (
      <Container maxWidth="sm">
        <Snackbar
          className={classes.snackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isSnackBarOpen}
          onClose={this.handleSnackBarClosed}
          autoHideDuration={3000}
          ContentProps={{
            "aria-describedby": "todos-error-message"
          }}
          message={<span id="todos-error-message">{errorMessage}</span>}
        />

        {isLoading && <div>Loading ...</div>}
        {!isLoading && (
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
                    name={`todo-checkbox-${todo.id}`}
                    key={todo.id}
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <TodoPriority value={todo.priority} />

                <ListItemText
                  primary={todo.text}
                  secondary={
                    todo.dueTime
                      ? formatRelative(todo.dueTime, new Date())
                      : null
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
        )}
      </Container>
    );
  }
}

export default withStyles(styles)(TodoList);
