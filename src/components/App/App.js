import React from "react";
import AddTodo from "../../containers/AddTodo";
import TodoList from "../../containers/TodoList";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.title}>
      <CssBaseline />
      <main>
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
      </main>
    </Container>
  );
}

export default App;
