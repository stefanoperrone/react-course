import React from "react";
import { PropTypes } from "prop-types";

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

Person.propTypes = {
  /** is name of persone*/
  name: PropTypes.string,
  /** is surname of person*/
  surname: PropTypes.string,
  /** is age of person*/
  age: PropTypes.number
};

export default Person;
