import React from "react";
import * as PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../actions";
import { Field, reduxForm, getFormValues } from "redux-form";


class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: { status: false, path: null }
    };
  }

  render() {
    return this.state.redirect.status ? (
      <Redirect to={{ pathname: this.state.redirect.path }} />
    ) : (
      <div style={{ marginBottom: "30px" }}>
      <form>
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
                <Field name="name" component="input" type="text" />
              </td>
              <td width="33%">
                <Field name="surname" component="input" type="text" />
              </td>
              <td width="33%">
                <Field name="age" component="input" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        </form>
        <button
          style={{ marginLeft: "30px" }}
          onClick={() => {
            this.props.savePerson(this.props.formFields);
            this.setState({
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

const Form = reduxForm({
  form: "FORM_PEOPLE",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
})(PeopleForm)

export default connect(state => ({
    formFields: getFormValues("FORM_PEOPLE")(state),
}), mapDispatchToProps)(Form);
