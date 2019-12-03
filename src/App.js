import React from "react";
import "./App.css";
import People from "./People";
import PeopleStateFull from "./PeopleStateFull";

function Greetings(props) {
  return <h1>Ciao, {props.value}</h1>;
}

function App() {
  const firstComponent = <Greetings value="Mondo!!!" />;

  return (
    <div className="App">
      {firstComponent}
      <People />
      <PeopleStateFull />
    </div>
  );
}

export default App;
