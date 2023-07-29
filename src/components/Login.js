import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ onLogin }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate a login request (replace with actual API call)
    setTimeout(() => {
      const user = {
        id: 1,
        username: formData.username,
        // Add any other user info you need
      };
      onLogin(user);
      // After logging in, navigate to the home page
      history.push("/home");
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
