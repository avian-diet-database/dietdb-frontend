import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { RESET_PASSWORD } from "../../gql/mutations";
import { GET_USER_BY_EMAIL_AND_SECURITY_QUESTION } from "../../gql/queries";
import bcrypt from "bcryptjs";

interface DesignResetProps {
    setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
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

export const DesignResetPassword: React.FC<DesignResetProps> = (
  props: DesignResetProps
) => {
  const [validAccount, setValidAccount] = useState(true);
  const [validPasswords, setValidPasswords] = useState(true);

  const [resetState, setResetState] = useState({
    email: "",
    new_password: "",
    confirm_new_password: "",
    security_question: "",
  });
  
  function getFormLabels(field: string) {
    switch (field) {
      case "email":
        return "Email";
      case "new_password":
        return "New Password";
      case "confirm_new_password":
        return "Confirm New Password";
      case "security_question":
        return "Security Question: What is your favorite bird species?";
    }
  }

  // Query database to see if there a matching user and security question answer exists
  const { loading: userLoading, error: userError, data: userData, refetch } = useQuery(GET_USER_BY_EMAIL_AND_SECURITY_QUESTION, {
    variables: {
      email: "",
      security_question: "",
    },
  });

  // Mutation to change password of a specific account
  const [resetPassword, { loading: resetLoading, error: resetError, data: resetData }] = useMutation(RESET_PASSWORD);

  useEffect(() => {
    refetch({ email: resetState.email, security_question: resetState.security_question });
  }, [resetState.email, resetState.security_question]);

  function submitReset(){
    if (!(resetState.new_password === resetState.confirm_new_password)) {
      setValidPasswords(false);
      return;
    } else {
      setValidPasswords(true);
    }

    refetch({ email: resetState.email, security_question: resetState.security_question});
    console.log(userData);

    if (userData === undefined) {
      setValidAccount(false);
    } else {      
      let saltRounds = 10;
      bcrypt.hash(resetState.new_password, saltRounds, function (err, hashedPassword) {
        if (err) {
          throw err;
        } else {
          // Store hashed password in database
          resetPassword({ variables: { email: resetState.email, password: hashedPassword } });
          props.setIsReset(false);
        }
      });
    }
  }

  const setResetInputState = (e: any) => {
    const { name, value } = e.target;
    setResetState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Reset Password</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
          {Object.keys(resetState).map((field) => (
            <div className="field" key={field + "-signup-field"}>
              <label className="label">
                {getFormLabels(field)}
                <span style={greenTextStyles}> *</span>
              </label>
              <div className="control">
                <input
                  className="input"
                  type={field === "new_password" || field === "confirm_new_password" ? "password" : "input"}
                  placeholder={getFormLabels(field)}
                  name={field}
                  onChange={setResetInputState}
                ></input>
              </div>
            </div>
          ))}
        </div>
        {!validAccount && validPasswords ? <div className="noAccountError" style={signupPromptStyles}>
          <p style={redTextStyles}>No account with that email and security question answer exists. Please try again.</p>
        </div> : null}
        {!validPasswords ? <div className="matchingPasswordsError" style={signupPromptStyles}>
          <p style={redTextStyles}>Your passwords do not match. Please try again.</p>
        </div> : null}
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>
            Already have an account?{" "}
            <a style={greenTextStyles} onClick={() => props.setIsReset(false)}>
              Log in!
            </a>
          </p>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button
              className="button is-info"
              onClick={submitReset}
              disabled={
                resetState.email === "" ||
                resetState.new_password === "" ||
                resetState.confirm_new_password === "" ||
                resetState.security_question === ""
              }
            >
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
