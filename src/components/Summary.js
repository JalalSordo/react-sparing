import "./Summary.css";
import React from "react";

class Summary extends React.Component {
  render() {
    return (
      <h3>
        Completed {this.props.selectedCheckedBoxes} / {this.props.totalItems}
      </h3>
    );
  }
}

export default Summary;
