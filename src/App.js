import TodoItem from "./components/TodoItem";
import Summary from "./components/Summary";
import todoItemsDemoData from "./data/todoItemsDemoData";

function App() {
  const todoComponenets = todoItemsDemoData.map((todoItem) => (
    <TodoItem todoItem={todoItem} />
  ));

  return (
    <div className="container-fluid">
      <h1 className="display-1"> Todo List </h1>
      <hr />
      {/*using Json object*/}
      {todoComponenets}

      <Summary />
    </div>
  );
}
export default App;
