import React, { Fragment } from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  logInMessage: {
    padding: theme.spacing(3, 2)
  }
}));

const TodoListPage = ({ isUserLoggedIn }) => {
  const classes = useStyles();
  return (
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
      {!isUserLoggedIn && (
        <Paper className={classes.logInMessage}>
          Login with your Google account in order to access your tasks!
        </Paper>
      )}
      {isUserLoggedIn && (
        <Paper className={classes.logInMessage}>
          <AddTodo />
          <TodoList />
        </Paper>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isUserLoggedIn: state.user.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(TodoListPage);
