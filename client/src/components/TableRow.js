import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.file}</td>
      <td>{props.time}</td>
      <td>{props.count}</td>
      <td>{props.source}</td>
      <td>{props.srcMc}</td>
      <td>{props.info}</td>
    </tr>
  );
}
export default TableRow;
