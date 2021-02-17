import "./Summary.css";
import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCheckedBoxes: this.props.todoItems.filter(
        (elem) => elem.completed === true
      ).length,
      totalItems: this.props.todoItems.length
    };
  }
  render() {
    return (
      <h3>
        Completed {this.state.selectedCheckedBoxes} / {this.state.totalItems}
      </h3>
    );
  }
}

export default Summary;
