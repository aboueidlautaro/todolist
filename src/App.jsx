import React from "react";
import "./assets/css/format.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="todo-app">
          <TodoList />
        </div>
      </Router>
    </>
  );
}

export default App;
