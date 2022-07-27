import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function TodoForm(props) {
  const optMain = (
    <p id="checklist">
      <FontAwesomeIcon id="f0" icon={faList} />
    </p>
  );

  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Actualización de tarea"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />

          <button onClick={handleSubmit} className="todo-button edit">
            Guardar
          </button>
        </>
      ) : (
        <>
          <div className="todo-container">
            <input
              placeholder="Presione         para crear"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
            />

            <select className="select-button" name="optionsSelect">
              <option id="0">Tareas</option>
              <option id="1">Casa</option>
              <option id="2">Trabajo</option>
              <option id="3">Deporte</option>
            </select>
          </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
