import React, { useEffect, useState } from 'react';
import { LogicSignup } from "../logic/LogicSignup";

interface DesignLoginProps {
}

const formContainerStyles = {
  margin: "5% 20%",
};

const signupPromptStyles = {
  margin: "2.5% 0%",
};

const linkStyles = {
    color: "#33CC99",
}

const requiredFields = [
  "Email",
  "Password",
];

export const DesignLogin = () =>  {
  const [isSignup, setIsSignup] = useState(false);

  return (
    !isSignup ?
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Login</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
        {requiredFields.map((field) => (
            <div className="field">
              <label className="label">{field}</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder={field}
                ></input>
              </div>
            </div>
          ))}
        </div>
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>New user? <a style={linkStyles} onClick={() => setIsSignup(true)}>Sign up!</a></p>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a className="button is-info">Submit</a>
          </p>
        </div>
      </div>
    </div> :
    <LogicSignup></LogicSignup>
  );
};
