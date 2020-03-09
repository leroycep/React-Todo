import React from "react";
import { useForm } from "react-hook-form";

export default function Todo(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    props.updateTodo(props.todo.id, data.description);
  };

  if (props.todo.editing) {
    return (
      <form
        className={
          props.todo.checked ? "task editing completed" : "task editing"
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="checkbox"
          checked={props.todo.checked}
          onChange={ev => props.toggleComplete(props.todo.id)}
        />
        <input
          type="text"
          ref={register}
          name="description"
          defaultValue={props.description}
          autoFocus
        />
        <button type="submit" className="edit">
          Save
        </button>
        <button
          type="button"
          onClick={e => props.deleteTodo(props.todo.id)}
          className="delete"
        >
          Delete
        </button>
      </form>
    );
  } else {
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
}
