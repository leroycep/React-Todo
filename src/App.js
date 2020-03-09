import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.scss";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    const storageState = localStorage.getItem("state");
    console.log(storageState);
    if (storageState !== null) {
      this.state = JSON.parse(storageState);
    } else {
      this.state = {
        todos: [
          {
            task: "Organize Garage",
            id: 1528817077286,
            completed: false
          },
          {
            task: "Bake Cookies",
            id: 1528817084358,
            completed: true
          }
        ]
      };
    }
  }

  toggleComplete = id => {
    const newState = {
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    };
    this.setState(newState);
    this.store(newState);
  };

  addTodo = task => {
    const newState = {
      todos: [
        ...this.state.todos,
        {
          task,
          id: Date.now(),
          completed: false
        }
      ]
    };
    this.setState(newState);
    this.store(newState);
  };

  clearCompleted = () => {
    const newState = {
      todos: this.state.todos.filter(todo => !todo.completed)
    };
    this.setState(newState);
    this.store(newState);
  };

  store = state => {
    localStorage.setItem("state", JSON.stringify(state));
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
