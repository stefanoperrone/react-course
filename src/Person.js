import React from "react";

function Person(props) {
  return (
    <tr>
      <td>
        <h3>{props.name}</h3>
      </td>
      <td>
        <h3>{props.surname}</h3>
      </td>
      <td>
        <h3>{props.age}</h3>
      </td>
    </tr>
  );
}

export default Person;
