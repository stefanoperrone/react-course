import React from "react";
import Person from "./Person";
import styled from "styled-components";
import { CustomTable } from "../theme";
import { connect } from "react-redux";

const People = props => {
  return props.people && props.people.length > 0 ? (
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
    <h3 style={{ marginLeft: "30px" }}>Lista Vuota</h3>
  );
};

export const Container = styled.div`
  width: 550px;
  display: block;
  margin: auto;
`;

export default connect(
  state => ({
    people: state.people
  }),
  null
)(People);
