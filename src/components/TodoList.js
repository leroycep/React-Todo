import React, { useState } from "react";
import Todo, { TodoEdit } from "./Todo";

export default function TodoList(props) {
  const [editingNewTask, setEditingNewTask] = useState(false);
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={props.toggleComplete}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
        />
      ))}
      {editingNewTask ? (
        <TodoEdit
          key={"editing"}
          todo={{ description: "", checked: false }}
          onSubmit={data => props.addTodo(data.description)}
          onCancel={() => setEditingNewTask(false)}
        />
      ) : null}
      <button onClick={ev => setEditingNewTask(true)}>Add Task</button>
    </div>
  );
}
