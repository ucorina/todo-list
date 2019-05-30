import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/Header";
import TodoListPage from "../pages/TodoListPage";
import LoginPage from "../pages/LoginPage";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Header />
      <Container maxWidth="md" className={classes.title}>
        <CssBaseline />
        <main>
          <Route path="/" exact component={TodoListPage} />
          <Route path="/login" component={LoginPage} />
        </main>
      </Container>
    </Router>
  );
}

export default App;
