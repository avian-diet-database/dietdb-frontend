import React from "react";

interface DesignSignupProps {
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>,
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

const requiredFields = [
  "Full Name",
  "Username",
  "Email",
  "Password",
  "Confirm Password",
];
const optionalFields = ["Admin Password"];

export const DesignSignup: React.FC<DesignSignupProps> = (props: DesignSignupProps) => {
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
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>Already have an account? <a style={greenTextStyles} onClick={() => props.setIsSignup(false)}>Log in!</a></p>
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
