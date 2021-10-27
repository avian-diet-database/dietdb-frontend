import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import React, { useState } from "react";

interface DesignSignupProps {
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>,
  addUser:(options?: MutationFunctionOptions<any, Record<string, any>>) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
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
}

function getFormLabels(field: string) {
  switch(field) {
    case "full_name":
      return "Full Name";
    case "username":
      return "Username";
    case "email":
      return "Email";
    case "password":
      return "Password";
    case "confirm_password":
      return "Confirm Password";
    case "adminPassword":
      return "Admin Password";
  }
}

export const DesignSignup: React.FC<DesignSignupProps> = (props: DesignSignupProps) => {
  const[signupState, setSignupState] = useState(
    {
      full_name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      adminPassword: "",
    }
  );

  const[validPasswords, setValidPasswords] = useState(true);

  const setSignupInputState = (e:any) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setSignupState(prevState => ({ ...prevState, [name]: value }));
    console.log(signupState);
  }
  
  function submitSignup() {
      console.log("submitting");
      console.log(signupState);

      if (!(signupState.password === signupState.confirm_password)) {
        setValidPasswords(false);
        return;
      } else {
        setValidPasswords(true);
      }

      props.addUser({ 
        variables: { 
          full_name: signupState.full_name,
          username:signupState.username, 
          email: signupState.email,
          password: signupState.password,
          adminPassword: signupState.adminPassword, isVerified: "false", 
          isAdmin: resolveAdminPassword(signupState.adminPassword) } 
      });
  }

  // Confirms if admin password entered by user matches configured admin password
  function resolveAdminPassword(password: string) {
    return (password === "adminpass")+"";
  }

  return (
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Sign Up</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
          {Object.keys(signupState).map((field) => (
            <div className="field" key={field+"-signup-field"}>
              {field === "adminPassword" ? <label className="label">{getFormLabels(field)}</label> 
                : <label className="label">{getFormLabels(field)}<span style={greenTextStyles}> *</span></label>}
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder={getFormLabels(field)}
                  name={field}
                  onChange = {setSignupInputState}
                ></input>
                {field === "password" && !validPasswords ? <p style={redTextStyles}>Your passwords do not match. Please try again.</p> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>Already have an account? <a style={greenTextStyles} onClick={() => props.setIsSignup(false)}>Log in!</a></p>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a className="button is-info"
              onClick = {submitSignup}>Submit</a>
          </p>
        </div>
      </div>
    </div>
  );
};
