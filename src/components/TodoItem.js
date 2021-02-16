import "./TodoItem.css";

function TodoItem(props) {
  console.log(props);

  function handleCheck(event) {
    if (event.target.checked) {
      console.log("box is true. should be added.");
      //this.props.setForDelete(this.props.person._id);
    }
  }
  return (
    <div style={{ display: !props.todoItem.description && "none" }}>
      <div className="form-check">
        <input
          className="form-check-input"
          onChange={handleCheck}
          type="checkbox"
          id={props.todoItem.id}
        />
        <label className="form-check-label" htmlFor={props.todoItem.id}>
          {props.todoItem.description}
        </label>
      </div>
      <hr />
    </div>
  );
}
export default TodoItem;
