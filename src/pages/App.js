import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import TodoListPage from "../pages/TodoListPage";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container maxWidth="md" className={classes.title}>
        <CssBaseline />
        <main>
          <TodoListPage />
        </main>
      </Container>
    </div>
  );
}

export default App;
