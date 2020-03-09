import React from "react";
import "./Todo.css";

export default function Todo(props) {
  return (
    <div className={props.todo.completed ? "task completed" : "task"}>
      {props.todo.task}
    </div>
  );
}
