import React, { useState } from "react";
import TodoForm from "./TodoForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareCheck as checkSolid } from "@fortawesome/free-solid-svg-icons";

import { faSquareCheck as checkRegular } from "@fortawesome/free-regular-svg-icons";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="main-text">
        <div onClick={() => completeTodo(todo.id)}>
          {todo.isComplete ? (
            <FontAwesomeIcon icon={checkSolid} />
          ) : (
            <FontAwesomeIcon icon={checkRegular} />
          )}
        </div>
        <p>{todo.text}</p>
      </div>
      <div className="icons">
        {todo.isComplete ? (
          <>
            <button
              onClick={() => {
                removeTodo(todo.id);
              }}
              disabled
            >
              Borrar
            </button>
            <button
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              disabled
            >
              Editar
            </button>
          </>
        ) : (
          <>
            <button onClick={() => removeTodo(todo.id)}>Borrar</button>
            <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
              Editar
            </button>
          </>
        )}
      </div>
    </div>
  ));
};

export default Todo;
