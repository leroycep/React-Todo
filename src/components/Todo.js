import React from "react";

export default function Todo(props) {
  return (
    <div
      className={props.todo.completed ? "task completed" : "task"}
      onClick={() => props.toggleComplete(props.todo.id)}
    >
      {props.todo.description}
    </div>
  );
}
