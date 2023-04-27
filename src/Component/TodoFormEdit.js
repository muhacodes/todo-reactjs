import React, { useState } from "react";

function EditTodoForm(props) {
  const [value, setValue] = useState(props.todo.task);

  
  const handleFormSubmit = event => {
    event.preventDefault();
    props.editTodo(value, props.todo.id)
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
        value={value}
        onChange={inputHandler}
      />
      <button type="submit" className="todo-btn"> Add Task     </button>
    </form>
  );
}

export default EditTodoForm;
