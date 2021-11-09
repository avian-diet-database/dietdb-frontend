import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../../gql/mutations";
import bcrypt from "bcryptjs";

interface DesignSignupProps {
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
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

function getFormLabels(field: string) {
  switch (field) {
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
    case "admin_password":
      return "Admin Password";
  }
}

export const DesignSignup: React.FC<DesignSignupProps> = (
  props: DesignSignupProps
) => {
  // AddUser calls GQL mutation to submit a new sign up to the database
  const [addUser, { loading, error, data }] = useMutation(CREATE_USER);

  const [signupState, setSignupState] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    admin_password: "",
  });

  const [validPasswords, setValidPasswords] = useState(true);

  const setSignupInputState = (e: any) => {
    const { name, value } = e.target;
    setSignupState((prevState) => ({ ...prevState, [name]: value }));
  };

  function submitSignup() {
    console.log("submitting");

    if (!(signupState.password === signupState.confirm_password)) {
      setValidPasswords(false);
      return;
    } else {
      setValidPasswords(true);
    }

    let saltRounds = 10;
    bcrypt.hash(signupState.password, saltRounds, function (err, hash) {
      if (err) {
        throw err;
      } else {
        // Store hashed password in database
        addUser({
          variables: {
            full_name: signupState.full_name,
            username: signupState.username,
            email: signupState.email,
            password: hash,
            // password: signupState.password,
            admin_password: signupState.admin_password,
            // Note: is_verified field added in case of future email verification implementation
            is_verified: "false",
            is_admin: resolveAdminPassword(signupState.admin_password),
          },
        });
      }
    });
  }

  // Confirms if admin password entered by user matches configured admin password
  function resolveAdminPassword(password: string) {
    return (password === "adminpass") + "";
  }

  return (
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Sign Up</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
          {Object.keys(signupState).map((field) => (
            <div className="field" key={field + "-signup-field"}>
              {field === "admin_password" ? (
                <label className="label">{getFormLabels(field)}</label>
              ) : (
                <label className="label">
                  {getFormLabels(field)}
                  <span style={greenTextStyles}> *</span>
                </label>
              )}
              <div className="control">
                <input
                  className="input"
                  type={field === "password" || field === "confirm_password" || field === "admin_password" ? "password" : "input"}
                  placeholder={getFormLabels(field)}
                  name={field}
                  onChange={setSignupInputState}
                ></input>
                {field === "password" && !validPasswords ? (
                  <p style={redTextStyles}>
                    Your passwords do not match. Please try again.
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>
            Already have an account?{" "}
            <a style={greenTextStyles} onClick={() => props.setIsSignup(false)}>
              Log in!
            </a>
          </p>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a className="button is-info" onClick={submitSignup}>
              Submit
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
