import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_USER_BY_EMAIL } from "../../gql/queries";
import { LogicSignup } from "../logic/LogicSignup";
import { LogicResetPassword } from "../logic/LogicResetPassword";
import bcrypt from "bcryptjs";

interface DesignLoginProps {
  setUser: any;
}

const formContainerStyles = {
  margin: "5% 20%",
};

const signupPromptStyles = {
  margin: "2.5% 0%",
};

const greenTextStyles = {
  color: "#33CC99",
};

const redTextStyles = {
  color: "#FF0000",
};

const requiredFields = ["Email", "Password"];

export const DesignLogin = (props: DesignLoginProps) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [loginState, setLoginState] = useState({
    Email: "email",
    Password: "password",
  });

  useEffect(() => {
    refetch({ email: loginState.Email });
  }, [loginState]);

  const setLoginInputState = (e: any) => {
    const { name, value } = e.target;
    setLoginState((prevState) => ({ ...prevState, [name]: value }));
  };

  // GetUserByLogin calls GQL query to confirm if a login request is successful (user exists in the database)
  const { loading, error, data, refetch } = useQuery(GET_USER_BY_EMAIL, {
    variables: {
      email: "",
    },
  });

  function submitLogin() {
    if (data !== undefined) {
      bcrypt.compare(
        loginState.Password,
        data.getUserByEmail.password,
        (err, passwordMatches) => {
          if (err) {
            throw err;
          } else {
            if (passwordMatches) {
              props.setUser({
                full_name: data.getUserByEmail.full_name,
                username: data.getUserByEmail.username,
                email: data.getUserByEmail.email,
                is_verified: data.getUserByEmail.is_verified,
                is_admin: data.getUserByEmail.is_admin,
              });
            }
          }
        }
      );
    } else {
      setLoginFailed(true);
    }
  }

  return !isSignup ? (
    !isReset ? 
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Login</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
          {requiredFields.map((field) => (
            <div className="field" key={field + "-login-field"}>
              <label className="label">{field}</label>
              <div className="control">
                  <input
                    className="input"
                    type={field === "Password" ? "password" : "input"}
                    placeholder={field}
                    name={field}
                    onChange={setLoginInputState}
                  ></input>
              </div>
            </div>
          ))}
        </div>
        {loginFailed ? <div className="errorPrompt" style={signupPromptStyles}>
          <p style={redTextStyles}>Your login information was incorrect. Please try again.</p>
        </div> : null}
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>
            New user?{" "}
            <a style={greenTextStyles} onClick={() => setIsSignup(true)}>
              Sign up!
            </a>
          </p>
        </div>
        <div className="recoveryPrompt" style={signupPromptStyles}>
          <p>
            Forgot password?{" "}
            <a style={greenTextStyles} onClick={() => setIsReset(true)}>
              Reset it!
            </a>
          </p>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button className="button is-info" onClick={submitLogin} disabled={loginState.Email===""||loginState.Password===""}>
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>:
    <LogicResetPassword setIsReset={setIsReset}/>
  ) : (
    <LogicSignup setIsSignup={setIsSignup}/>
  );
};
