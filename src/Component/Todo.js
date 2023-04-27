import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, onDelete, toggleComplete, onEditTodo }) {
  const deleteTodo = () => {
    onDelete(todo.id);
  };

  const _editTodo = () =>  {
    onEditTodo(todo.id)
  }

  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? "completed" : ""}`}>{todo.task}</p>
      <div>
        <FontAwesomeIcon onClick={_editTodo} icon={faPenToSquare} />
        <FontAwesomeIcon onClick={deleteTodo} icon={faTrash} />
      </div>
    </div>
  );
}

export default Todo;
