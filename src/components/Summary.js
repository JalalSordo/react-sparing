import "./Summary.css";

function Summary() {
  let selectedCheckedBoxes = document.querySelectorAll(
    "input[name=chkBox]:checked"
  );
  let checkedBoxes = document.getElementsByTagName("input");

  return (
    <h3>
      Completed {selectedCheckedBoxes.length} / {checkedBoxes.length}
    </h3>
  );
}
export default Summary;
