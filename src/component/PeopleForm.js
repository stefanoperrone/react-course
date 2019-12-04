import React from "react";
import * as PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../actions";
class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "",
        surname: "",
        age: ""
      },
      redirect: { status: false, path: null }
    };
  }

  saveValue = event => {
    let key = event.target.id;
    let obj = { [key]: event.target.value };
    this.setState({ person: { ...this.state.person, ...obj } });
  };

  render() {
    return this.state.redirect.status ? (
      <Redirect to={{ pathname: this.state.redirect.path }} />
    ) : (
      <div style={{ marginBottom: "30px" }}>
        <table style={{ width: "300px", margin: "30px" }}>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="33%">
                <input
                  id="name"
                  onChange={event => this.saveValue(event)}
                  value={this.state.person.name}
                ></input>
              </td>
              <td width="33%">
                <input
                  id="surname"
                  onChange={event => this.saveValue(event)}
                  value={this.state.person.surname}
                ></input>
              </td>
              <td width="33%">
                <input
                  id="age"
                  onChange={event => this.saveValue(event)}
                  value={this.state.person.age}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          style={{ marginLeft: "30px" }}
          onClick={() => {
            this.props.savePerson(this.state.person);
            this.setState({
              person: {
                name: "",
                surname: "",
                age: ""
              },
              redirect: { status: true, path: "/users-list" }
            });
          }}
        >
          save
        </button>
      </div>
    );
  }
}

PeopleForm.prototypes = {
  handleBackNewPerson: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(PeopleForm);
