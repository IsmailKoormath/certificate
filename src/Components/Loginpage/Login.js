import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../Store2/Login2/LoginSlice";
import "./Login.css";


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [status, setStatus] = useState();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(loginApi({status,navigate}))

  };

  return (
    <div className="login-container">
      <Container className="container-login">
        <h3>EDISONVALLEY</h3>

        <form onSubmit={handleSubmitLogin} action="">
          <h4>Login</h4>
          {/* <p>{userDetails?.response}</p> */}
          <label>Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setStatus({ ...status, username: e.target.value })}
          />
          <label>Password</label>
          <input
            id="password"
            type="Password"
            placeholder="Enter Password"
            onChange={(e) => setStatus({ ...status, password: e.target.value })}
          />
          {/* <p> {loginFail?.error_message}</p> */}

          <div className="button">
            <input
              type="submit"
              // value={loading ? "loading..." : "Login "}
              className="btn btn-primary"
              style={{ width: " 100%", marginTop: "20px" }}
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
