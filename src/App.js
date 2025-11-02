import React from "react";
import Header from "./components/Header";
import ToDoItem from "./components/todoItem";
import Button from "./components/Button";
import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      <Header title="ToDo App"/>
      <ToDoItem text="Eat"/>
      <ToDoItem text="Code"/>
      <ToDoItem text="Play"/>
      <ToDoItem text="Study"/>
      <ToDoItem text="Sleep Again"/>
      <Button/>
    </div>
  )
};

export default App;