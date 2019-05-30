import { todosRef } from "../firebase";

export const addTodo = async (userId, todo) => {
  return todosRef
    .child(userId)
    .push()
    .set({
      ...todo,
      dueTime: todo.dueTime ? todo.dueTime.getTime() : null,
      completed: false
    });
};

export const deleteTodo = async (userId, todoId) => {
  return todosRef
    .child(userId)
    .child(todoId)
    .remove();
};

export const toggleTodoStatus = async (userId, todoId) => {
  const snapshot = await todosRef
    .child(userId)
    .child(todoId)
    .once("value");
  const todo = snapshot.val();
  return todosRef
    .child(userId)
    .child(todoId)
    .update({ completed: !todo.completed });
};

export const listenForTodoUpdates = async (userId, onTodosUpdated) => {
  todosRef.child(userId).on("value", snapshot => {
    const dbTodos = snapshot.val() || [];
    const todos = Object.keys(dbTodos).map(key => {
      const dbTodo = dbTodos[key];
      return {
        ...dbTodo,
        dueTime: dbTodo.dueTime ? new Date(dbTodo.dueTime) : null,
        id: key
      };
    });
    onTodosUpdated(todos);
  });
};

export const stopListeningForTodoUpdates = userId => {
  todosRef.child(userId).off();
};
