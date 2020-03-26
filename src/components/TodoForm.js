import React from "react";
import { useForm } from "react-hook-form";

export default function TodoForm(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    props.addTodo(data.task);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="task" ref={register} />
      <button>Add Task</button>
      <button type="button" onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}
