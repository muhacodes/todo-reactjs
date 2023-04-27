import React, { useState } from "react";

function TodoForm(props) {
  const [value, setValue] = useState("");

  
  const handleFormSubmit = event => {
    event.preventDefault();
    props.addTodo(value);
    setValue('');
  };

  const inputHandler = event => {
    setValue(event.target.value);
    // console.log(value);
  };


  return (
    <form className="TodoForm" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={inputHandler}
      />
      <button type="submit" className="todo-btn"> Add Task     </button>
    </form>
  );
}

export default TodoForm;
