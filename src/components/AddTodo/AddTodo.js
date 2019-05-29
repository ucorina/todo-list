import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    marginBottom: theme.spacing(2)
  }
}));

const AddTodo = ({ onItemAdded }) => {
  const classes = useStyles();
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(input);
        if (!input.value.trim()) {
          return;
        }
        onItemAdded({ text: input.value });
        input.value = "";
      }}
    >
      <Grid
        container
        direction="row"
        alignContent="stretch"
        alignItems="flex-end"
        justify="center"
        spacing={4}
        className={classes.grid}
      >
        <Grid item>
          <TextField
            label="what do you want to do?"
            fullWidth
            inputRef={node => {
              input = node;
            }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
