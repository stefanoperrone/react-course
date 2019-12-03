import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users-list">Users List</Link>
            </li>
            <li>
              <Link to="/user-add">Add New User</Link>
            </li>
          </ul>
        </nav>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
