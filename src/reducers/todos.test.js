import todos from "./todos";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from "../constants/todos";

describe("todos reducer", () => {
  it("should start with no todo items", () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(todos([], { type: ADD_TODO, text: "Do the assigment" })).toEqual([
      {
        text: "Do the assigment",
        completed: false,
        id: 1
      }
    ]);
  });

  it("should increment the ids when adding todos", () => {
    const step1 = todos([], { type: ADD_TODO, text: "A" });
    const step2 = todos(step1, { type: ADD_TODO, text: "B" });

    expect(step1[0].id + 1).toEqual(step2[1].id);
  });

  it("should handle DELETE_TODO", () => {
    expect(
      todos(
        [
          {
            text: "A",
            completed: false,
            id: 1
          },
          {
            text: "B",
            completed: false,
            id: 2
          }
        ],
        {
          type: DELETE_TODO,
          id: 2
        }
      )
    ).toEqual([
      {
        text: "A",
        completed: false,
        id: 1
      }
    ]);
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todos(
        [
          { text: "A", completed: false, id: 1 },
          { text: "B", completed: false, id: 2 }
        ],
        { type: TOGGLE_TODO_STATUS, id: 1 }
      )
    ).toEqual([
      { text: "A", completed: true, id: 1 },
      { text: "B", completed: false, id: 2 }
    ]);

    expect(
      todos(
        [
          { text: "A", completed: true, id: 1 },
          { text: "B", completed: false, id: 2 }
        ],
        { type: TOGGLE_TODO_STATUS, id: 1 }
      )
    ).toEqual([
      { text: "A", completed: false, id: 1 },
      { text: "B", completed: false, id: 2 }
    ]);
  });
});
