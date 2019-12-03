import React from "react";
import Person from "./Person";
import PeopleForm from "./PeopleForm";
import styled from "styled-components";
import { CustomTable } from "./theme";

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Luca", surname: "Verdi", age: 18 },
        { name: "Mario", surname: "Rossi", age: 25 },
        { name: "Paolo", surname: "Rossi", age: 30 }
      ]
    };
  }

  addNewPerson = person => {
    this.setState({
      people: [...this.state.people, person]
    });
  };

  render() {
    return (
      <Container>
        <CustomTable borderColor="red">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((el, key) => (
              <Person
                key={key}
                name={el.name}
                surname={el.surname}
                age={el.age}
              />
            ))}
          </tbody>
        </CustomTable>
        <button
          onClick={() =>
            this.addNewPerson({ name: "Giuseppe", surname: "Verdi", age: 90 })
          }
        >
          add
        </button>
        <PeopleForm handleBackNewPerson={person => this.addNewPerson(person)} />
      </Container>
    );
  }
}

export const Container = styled.div`
  width: 550px;
  display: block;
  margin: auto;
`;

export default People;
