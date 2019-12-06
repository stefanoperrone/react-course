import React from "react";
import Person from "../Person/Person";
import { PropTypes } from "prop-types";

const People = props => {
  return (
    <div style={{ width: "550px", display: "block", margin: "auto" }}>
      <table style={{ width: "100%", marginTop: "30px", textAlign: "center" }}>
        <thead>
          <tr>
            <th width="33%">Firstname</th>
            <th width="33%">Lastname</th>
            <th width="33%">Age</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((el, key) => (
            <Person
              key={key}
              name={el.name}
              surname={el.surname}
              age={el.age}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

People.propTypes = {
  /** is list of people*/
  list: PropTypes.array
};

People.defaultProps = {
  list: [
    { name: "Luca", surname: "Verdi", age: 18 },
    { name: "Mario", surname: "Rossi", age: 25 },
    { name: "Paolo", surname: "Rossi", age: 30 }
  ]
};

export default People;
