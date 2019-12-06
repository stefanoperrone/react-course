import React from "react";
import Person from "../Person/Person";
import styled from "styled-components";
import { CustomTable } from "../../theme";
import { PropTypes } from "prop-types";

const PeopleStateFull = props => {
  return props.people ? (
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
          {props.people.map((el, key) => (
            <Person
              key={key}
              name={el.name}
              surname={el.surname}
              age={el.age}
            />
          ))}
        </tbody>
      </CustomTable>
    </Container>
  ) : (
    <h3>Lista Vuota</h3>
  );
};

export const Container = styled.div`
  width: 550px;
  display: block;
  margin: auto;
`;

PeopleStateFull.propTypes = {
  /** list of people*/
  people: PropTypes.array
};

export default PeopleStateFull;
