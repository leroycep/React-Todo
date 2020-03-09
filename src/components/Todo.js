import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Todo(props) {
  return (
    <div className={props.todo.checked ? "task completed" : "task"}>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={ev => props.toggleComplete(props.todo.id)}
      />
      <div
        className="description"
        onDoubleClick={e => props.editTodo(props.todo.id)}
      >
        {props.todo.description}
      </div>
      <button
        type="button"
        onClick={e => props.editTodo(props.todo.id)}
        className="edit"
      >
        Edit
      </button>
      <button
        type="button"
        onClick={e => props.deleteTodo(props.todo.id)}
        className="delete"
      >
        Delete
      </button>
    </div>
  );
}
