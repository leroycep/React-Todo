import React from "react";

export default function Todo(props) {
  return (
    <div className={props.todo.checked ? "task completed" : "task"}>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={ev => props.toggleComplete(props.todo.id)}
      />
      {props.todo.description}
    </div>
  );
}
