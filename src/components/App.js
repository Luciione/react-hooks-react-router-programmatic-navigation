import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Redirect to login if user is not logged in */}
          {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {/* Pass the handleLogin function to the Login component */}
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/home">
          {/* Show the Home component only if the user is logged in */}
          {user ? <Home onLogout={handleLogout} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
