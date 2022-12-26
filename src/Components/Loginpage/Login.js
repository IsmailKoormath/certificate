import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../Login/useApi";
import { Container } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const { userDetails, loginFail, loading } = useSelector((status) => ({
    userDetails: status.LoginReducer.userDetails,
    loginFail: status.LoginReducer.error,
    loading: status.LoginReducer.loading,
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [status, setStatus] = useState();

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    dispatch(loginApi(status,navigate));
  };

  return (
    <div className="login-container">
      <Container className="container-login">
        <h3>EDISONVALLEY</h3>

        <form onSubmit={handleSubmitLogin} action="" autoComplete="off">
          <h4>Login</h4>
          <p>{userDetails?.response}</p>
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
          <p> {loginFail?.error_message}</p>

          <div className="button">
            <input
              type="submit"
              value={loading ? "loading..." : "Login "}
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
