import React, { useState, useGlobal } from "reactn";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("mydesignbuddy@gmail.com");
  const [password, setPassword] = useState("lonestar6320");
  const [error, setError] = useState("");
  const setAuthToken = useGlobal("setAuthToken");
  const [authToken] = useGlobal("authToken");

  const onLogin = e => {
    e.preventDefault();
    axios
      .post(
        "https://bootcampspot.com/api/instructor/v1/login",
        {
          email,
          password
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(response => {
        setError(null);
        if (
          response.data &&
          response.data.success === true &&
          response.data.authenticationInfo &&
          response.data.authenticationInfo.authToken
        ) {
          setAuthToken(response.data.authenticationInfo.authToken);
        } else {
          setError("Invalid login");
          if (response && response.data && response.data.errorCode) {
            setError(response.data.errorCode);
          }

          setAuthToken(null);
          console.warn(response);
        }
        // this.setState({ loading: false, error: error });
      })
      .catch(error => {
        setError(error.message);

        setAuthToken(null);
        // this.setState({ loading: false, error: error.message });
      });
  };

  return (
    <form onSubmit={onLogin}>
      <div>
        <label>Username</label>
        <input
          icon="user"
          type="email"
          placeholder="Username"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          icon="key"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      {error ? <div className="error">{error}</div> : null}
      AuthToken: {authToken}
      <button onClick={onLogin}>Login</button>
    </form>
  );
};

export default Login;
