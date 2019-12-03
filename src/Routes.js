import React from "react";
import { Switch, Route } from "react-router-dom";
import PeopleStateFull from "./component/PeopleStateFull";
import PeopleForm from "./component/PeopleForm";
import Greetings from "./component/Greetings";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      people: [
        { name: "Luca", surname: "Verdi", age: 18 },
        { name: "Mario", surname: "Rossi", age: 25 },
        { name: "Paolo", surname: "Rossi", age: 30 }
      ]
    });
  }

  addNewPerson = person => {
    this.setState({
      people: [...this.state.people, person]
    });
  };

  render() {
    return (
      <Switch>
        <Route path="/users-list">
          <PeopleStateFull people={this.state.people} />
        </Route>
        <Route path="/user-add">
          <PeopleForm
            handleBackNewPerson={person => this.addNewPerson(person)}
          />
        </Route>
        <Route path="/">
          <Greetings value="Mondo!!!" />;
        </Route>
      </Switch>
    );
  }
}

export default Routes;
