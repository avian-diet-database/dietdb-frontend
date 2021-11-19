import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../../gql/mutations";
import { GET_USER_BY_EMAIL } from "../../gql/queries";
import bcrypt from "bcryptjs";
import { adminData } from "../data/adminPassword";

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
      return "Admin Password (only needed if signing up as Admin)";
    case "security_question":
      return "Security Question: What is your favorite bird species?";
  }
}

export const DesignSignup: React.FC<DesignSignupProps> = (
  props: DesignSignupProps
) => {
  // AddUser calls GQL mutation to submit a new sign up to the database
  const [
    addUser,
    { loading: createLoading, error: createError, data: createData },
  ] = useMutation(CREATE_USER);

  const [signupState, setSignupState] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    admin_password: "",
    security_question: "",
  });

  // Used to ensure signup doesn't use an existing email
  const {
    loading: userLoading,
    error: userError,
    data: userData,
    refetch,
  } = useQuery(GET_USER_BY_EMAIL, {
    variables: {
      email: signupState.email,
    },
  });

  const [validPasswords, setValidPasswords] = useState(true);
  const [isValidNewEmail, setIsValidNewEmail] = useState(true);
  const [isValidEmailFormat, setIsValidEmailFormat] = useState(true);

  const setSignupInputState = (e: any) => {
    const { name, value } = e.target;
    setSignupState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Return true if email format is valid
  const emailFormatChecker = (email: string) => {
    let regEx = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regEx.test(email);
  };

  function submitSignup() {
    refetch({ email: signupState.email });

    if (userData !== undefined) {
      setIsValidNewEmail(false);
      return;
    } else {
      setIsValidNewEmail(true);
    }

    if (!emailFormatChecker(signupState.email)) {
      setIsValidEmailFormat(false);
      return;
    } else {
      setIsValidEmailFormat(true);
    }

    if (!(signupState.password === signupState.confirm_password)) {
      setValidPasswords(false);
      return;
    } else {
      setValidPasswords(true);
    }

    let saltRounds = 10;
    bcrypt.hash(signupState.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        throw err;
      } else {
        // Store hashed password in database
        addUser({
          variables: {
            full_name: signupState.full_name,
            username: signupState.username,
            email: signupState.email,
            password: hashedPassword,
            admin_password: signupState.admin_password,
            // Note: is_verified field added in case of future email verification implementation
            is_verified: "false",
            is_admin: resolveAdminPassword(signupState.admin_password),
            security_question: signupState.security_question
          },
        });
        props.setIsSignup(false);
      }
    });
  }

  // Confirms if admin password entered by user matches configured admin password
  function resolveAdminPassword(password: string) {
    let result = bcrypt.compareSync(
      password,
      // A hashed and salted master admin password is stored in adminData
      // https://bcrypt-generator.com/ used to manually generate new hashed and salted password
      adminData.adminPassword
    );
    return (result + "");
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
                  type={
                    field === "password" ||
                    field === "confirm_password" ||
                    field === "admin_password"
                      ? "password"
                      : "input"
                  }
                  placeholder={getFormLabels(field)}
                  name={field}
                  onChange={setSignupInputState}
                ></input>
                {field === "password" && !validPasswords ? (
                  <p style={redTextStyles}>
                    Your passwords do not match. Please try again.
                  </p>
                ) : null}
                {field === "email" && !isValidNewEmail ? (
                  <p style={redTextStyles}>
                    An account with email "{signupState.email}" already exists.
                  </p>
                ) : null}
                {field === "email" && !isValidEmailFormat ? (
                  <p style={redTextStyles}>
                    Email is not valid. Please try again.
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
            <button className="button is-info" onClick={submitSignup} disabled={signupState.full_name===""
          || signupState.username===""||signupState.email===""||signupState.password===""||signupState.confirm_password===""||signupState.security_question===""}>
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
