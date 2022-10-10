// Action Value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    title,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "Redux를 배워봅시다.",
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.title],
      };
    default:
      return state;
  }
};

// export default reducer
export default todos;
