import React from "react";

export default function Todo(props) {
  return (
    <div className={props.todo.checked ? "task completed" : "task"}>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={ev => props.toggleComplete(props.todo.id)}
      />
      <div className="description">{props.todo.description}</div>
      <button onClick={e => {}} className="edit">
        Edit
      </button>
      <button onClick={e => props.deleteTodo(props.todo.id)} className="delete">
        Delete
      </button>
    </div>
  );
}
