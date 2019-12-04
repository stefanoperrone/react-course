import React from "react";
import { Switch, Route } from "react-router-dom";
import PeopleStateFull from "./component/PeopleStateFull";
import PeopleForm from "./component/PeopleForm";
import Greetings from "./component/Greetings";

const Routes = () => {
  return (
    <Switch>
      <Route path="/users-list">
        <PeopleStateFull />
      </Route>
      <Route path="/user-add">
        <PeopleForm />
      </Route>
      <Route path="/">
        <Greetings greeting="Mondo!!!" />;
      </Route>
    </Switch>
  );
};

export default Routes;
