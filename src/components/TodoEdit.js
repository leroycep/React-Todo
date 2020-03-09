import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function TodoEdit(props) {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    props.updateTodo(props.todo.id, data.description);
  };

  useEffect(() => {
    setValue("description", props.todo.description);
  }, [props.todo.description]);

  return (
    <form
      className={props.todo.checked ? "task editing completed" : "task editing"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={ev => props.toggleComplete(props.todo.id)}
      />
      <input type="text" ref={register} name="description" autoFocus />
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
}
