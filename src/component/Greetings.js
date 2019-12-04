import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../actions";

function Greetings(props) {
  return (
    <div style={{ display: "grid", width: "300px" }}>
      <h1 style={{ margin: "30px" }}>Ciao, {props.greeting}</h1>
      <div style={{ display: "inline-flex", justifyContent: "space-between" }}>
        <button
          style={{ marginLeft: "30px" }}
          onClick={() => {
            props.setValue();
          }}
        >
          Like
        </button>
        <h3>{props.value}</h3>
        <button
          onClick={() => {
            props.unSetValue();
          }}
        >
          DisLike
        </button>
      </div>
    </div>
  );
}

export default connect(
  state => ({
    value: state.value
  }),
  mapDispatchToProps
)(Greetings);
