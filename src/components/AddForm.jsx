import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: Date.now(),
        title,
      })
    );
  };

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  console.log(title);
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input value={title} onChange={onChangeHandler} type="text" />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default AddForm;
