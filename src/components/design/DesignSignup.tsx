import React from "react";

interface DesignSignupProps {}

const formContainerStyles = {
  margin: "5% 20%",
};

const greenTextStyles = {
  color: "#33CC99",
};

const submitStyles = {
  margin: "5%",
}

const requiredFields = [
  "Full Name",
  "Username",
  "Email",
  "Password",
  "Confirm Password",
];
const optionalFields = ["Admin Password"];

export const DesignSignup = () => {
  return (
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Sign Up</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
          {requiredFields.map((field) => (
            <div className="field">
              <label className="label">{field}<span style={greenTextStyles}> *</span></label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder={field}
                ></input>
              </div>
            </div>
          ))}
          {optionalFields.map((field) => (
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
        <div className="field is-grouped is-grouped-centered" style={submitStyles}>
          <p className="control">
            <a className="button is-info">Submit</a>
          </p>
        </div>
      </div>
    </div>
  );
};
