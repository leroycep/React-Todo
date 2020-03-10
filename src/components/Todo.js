import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Todo(props) {
  const [editing, setEditing] = useState(props.todo.description === null);

  if (editing) {
    return <TodoEdit {...props} setEditing={setEditing} />;
  }

  return (
    <div className={props.todo.checked ? "task completed" : "task"}>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={ev => props.toggleComplete(props.todo.id)}
      />
      <div className="description" onDoubleClick={e => setEditing(true)}>
        {props.todo.description}
      </div>
      <button type="button" onClick={e => setEditing(true)} className="edit">
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

function TodoEdit(props) {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    props.updateTodo(props.todo.id, data.description);
    props.setEditing(false);
  };

  const cancelEdit = () => {
    props.setEditing(false);
  };

  const onKeyDown = ev => {
    if (ev.key === "Escape") cancelEdit();
  };

  useEffect(() => {
    setValue("description", props.todo.description);
  }, [props.todo.description, setValue]);

  return (
    <form
      className={props.todo.checked ? "task editing completed" : "task editing"}
      onSubmit={handleSubmit(onSubmit)}
      onBlur={cancelEdit}
      onKeyDown={onKeyDown}
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
