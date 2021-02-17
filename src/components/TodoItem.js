import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    return (
      <div style={{ display: !this.props.todoItem.description && "none" }}>
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={() => this.props.handleChange(this.props.todoItem.id)}
            type="checkbox"
            id={this.props.todoItem.id}
            checked={this.props.todoItem.completed}
          />
          <label className="form-check-label" htmlFor={this.props.todoItem.id}>
            {this.props.todoItem.description}
          </label>
        </div>
        <hr />
      </div>
    );
  }
}

export default TodoItem;
