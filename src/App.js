import React from "react";
import TodoItem from "./components/TodoItem";
import Summary from "./components/Summary";
import todoItemsDemoData from "./data/todoItemsDemoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: todoItemsDemoData };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.completed = !todoItem.completed;
          console.log(todoItem.completed);
        }
        return todoItem;
      });
      return { todos: updatedTodos };
    });
  }

  render() {
    const todoComponents = this.state.todos.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        handleChange={this.handleChange}
      />
    ));
    return (
      <div className="container-fluid">
        <h1 className="display-1"> Todo List </h1>
        <hr />
        {todoComponents}
        <Summary />
      </div>
    );
  }
}

export default App;
