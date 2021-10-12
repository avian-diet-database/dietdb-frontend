import React from "react";

interface DesignLoginProps {}

const formContainerStyles = {
  padding: "5% 20%",
};

const signupPromptStyles = {
  padding: "2.5% 0%",
};

const linkStyles = {
    color: "#33CC99",
}

export const DesignLogin = () => {
  return (
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Login</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
              ></input>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
              ></input>
            </div>
          </div>
        </div>
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>New user? <a style={linkStyles}>Sign up!</a></p>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a className="button is-info">Submit</a>
          </p>
        </div>
      </div>
    </div>
  );
};
