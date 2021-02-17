import React from "react";
import TodoItem from "./components/TodoItem";
import Summary from "./components/Summary";
import todoItemsDemoData from "./data/todoItemsDemoData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: todoItemsDemoData };
    this.handleChange = this.handleChange.bind(this);
    //needed to bind functions to be used in Component methods r.g render
    this.x = this.x.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      let updatedTodos = prevState.todos.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem = {
            //...to break down an object
            ...todoItem,
            completed: !todoItem.completed
          };
          //this is buggy
          //todoItem.completed = !todoItem.completed;
        }
        return todoItem;
      });
      return { todos: updatedTodos };
    });
  }

  x() {
    console.log("xx");
  }
  render() {
    this.x();
    const todoComponents = this.state.todos.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        handleChange={this.handleChange}
      />
    ));
    const selectedCheckedBoxes = this.state.todos.filter(
      (elem) => elem.completed === true
    ).length;
    const totalItems = this.state.todos.length;
    return (
      <div className="container-fluid">
        <h1 className="display-1"> Todo List </h1>
        <hr />
        {todoComponents}
        <Summary
          selectedCheckedBoxes={selectedCheckedBoxes}
          totalItems={totalItems}
        />
      </div>
    );
  }
}

export default App;
