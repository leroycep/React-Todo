import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={props.toggleComplete}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
          updateTodo={props.updateTodo}
        />
      ))}
    </div>
  );
}
