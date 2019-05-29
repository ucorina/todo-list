import React from "react";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import AddTodo from "./AddTodo";

const mockStore = configureMockStore();

describe("AddTodo", () => {
  let store, wrapper;

  beforeEach(() => {
    const initialState = { todos: [] };
    store = mockStore(initialState);
    expect(store.getState()).toEqual({ todos: [] });
    wrapper = shallow(<AddTodo store={store} />);
  });

  it("adds a todo", () => {
    const todo = {
      text: "always test your code",
      priority: 1
    };
    wrapper.simulate("itemAdded", todo);

    const actions = store.getActions();
    expect(actions).toEqual([{ type: "ADD_TODO", item: todo }]);
  });
});
