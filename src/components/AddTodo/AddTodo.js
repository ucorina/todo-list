import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { TimePicker } from "@material-ui/pickers";
import { TODO_PRIORITY } from "../../constants/todos";

const useStyles = makeStyles(theme => ({
  grid: {
    marginBottom: theme.spacing(2)
  }
}));

const defaultTodoItem = {
  priority: TODO_PRIORITY.NORMAL,
  text: "",
  dueTime: null
};

const AddTodo = ({ onItemAdded }) => {
  const classes = useStyles();
  const [values, setValues] = useState(defaultTodoItem);
  const handleChange = event => {
    const property = event.target.name;
    const value = event.target.value;
    setValues(oldValues => ({
      ...oldValues,
      [property]: value
    }));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!values.text.trim()) {
          return;
        }
        onItemAdded(values);
        setValues(() => defaultTodoItem);
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
          <FormControl>
            <InputLabel htmlFor="todo-item-priority">Priority</InputLabel>
            <Select
              value={values.priority}
              onChange={handleChange}
              inputProps={{
                name: "priority",
                id: "todo-item-priority"
              }}
            >
              <MenuItem value={TODO_PRIORITY.HIGH}>High</MenuItem>
              <MenuItem value={TODO_PRIORITY.NORMAL}>Normal</MenuItem>
              <MenuItem value={TODO_PRIORITY.LOW}>Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <TextField
              value={values.text}
              inputProps={{
                name: "text",
                id: "todo-item-text"
              }}
              label="What do you want to do?"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <TimePicker
            clearable
            label="Due time"
            ampm={false}
            value={values.dueTime}
            onChange={dueTime =>
              setValues(oldValues => ({ ...oldValues, dueTime }))
            }
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
