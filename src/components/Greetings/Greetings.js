import React from "react";
import PropTypes from "prop-types";

function Greetings(props) {
  return <h1 style={{ margin: "30px" }}>Ciao, {props.value}</h1>;
}

Greetings.propTypes = {
  /** the string visualized after string "Ciao, "*/
  value: PropTypes.string
};

Greetings.defaultProps = {
  value: "Mondo!"
};

export default Greetings;
