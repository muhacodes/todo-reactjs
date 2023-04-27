import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import editTodoForm from "./TodoFormEdit";
import EditTodoForm from "./TodoFormEdit";
uuid4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid4(),
      task : 'Learning ReactJs',
      completed: false,
      isEditing: false
    },
    {
      id: uuid4(),
      task : 'Going for Shopping',
      completed: false,
      isEditing: false
    },

    {
      id: uuid4(),
      task : 'Working out in the Gym',
      completed: false,
      isEditing: false
    },

  ]);

  const [TodoUpdate, setTodoUpdate] = useState([]);

  const handleTodos = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuid4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={handleTodos} />
      {todos.map((todo) => {
        return todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} todo={todo} />
        ) : (
          <Todo
            toggleComplete={toggleComplete}
            key={todo.id}
            onDelete={deleteTodo}
            todo={todo}
            onEditTodo={editTodo}
          />
        );
      })}
    </div>
  );
};
