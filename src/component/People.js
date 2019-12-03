import React from "react";
import Person from "./Person";

let list = [
  { name: "Luca", surname: "Verdi", age: 18 },
  { name: "Mario", surname: "Rossi", age: 25 },
  { name: "Paolo", surname: "Rossi", age: 30 }
];

const People = () => {
  return (
    <div style={{ width: "550px", display: "block", margin: "auto" }}>
      <table style={{ width: "100%", marginTop: "30px" }}>
        <thead>
          <tr>
            <th width="33%">Firstname</th>
            <th width="33%">Lastname</th>
            <th width="33%">Age</th>
          </tr>
        </thead>
        <tbody>
          {list.map((el, key) => (
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

export default People;
