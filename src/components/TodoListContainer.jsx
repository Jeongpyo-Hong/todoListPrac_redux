import React from "react";
import { useSelector } from "react-redux";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div>
      {todos && todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
};

export default TodoListContainer;
