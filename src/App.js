import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.scss";

const LOCAL_STORAGE_KEY = "todo-state";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    const storageState = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(storageState);
    if (storageState !== null) {
      this.state = JSON.parse(storageState);
    } else {
      this.state = {
        selectedProject: 0,
        projects: [
          {
            id: 0,
            name: "Cleaning",
            tasks: [
              { id: 32142512, description: "Wash clothes", checked: false }
            ]
          }
        ]
      };
    }
  }

  currentProject = () => {
    return this.state.projects.filter(
      project => project.id === this.state.selectedProject
    )[0];
  };

  toggleComplete = id =>
    this.updateProject(this.state.selectedProject)(project => ({
      ...project,
      tasks: project.tasks.map(todo => ({
        ...todo,
        checked: todo.id === id ? !todo.checked : todo.checked
      }))
    }));

  addTodo = description => {
    this.updateProject(this.state.selectedProject)(project => ({
      ...project,
      tasks: [
        ...project.tasks,
        {
          description,
          id: Date.now(),
          checked: false
        }
      ]
    }));
  }

  updateProject = projectId => callback =>
    this.setAndStore({
      ...this.state,
      projects: this.state.projects.map(project => {
        if (project.id === projectId) {
          return callback(project);
        } else {
          return project;
        }
      })
    });

  setAndStore = state => {
    this.setState(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  };

  render() {
    const project = this.currentProject();
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={project.tasks} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
