import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { CREATE_USER } from '../../gql/mutations';
import { GET_USER_BY_LOGIN  } from '../../gql/queries';
import { LogicSignup } from "../logic/LogicSignup";

interface DesignLoginProps {
  setUser:any,
}

const formContainerStyles = {
  margin: "5% 20%",
};

const signupPromptStyles = {
  margin: "2.5% 0%",
};

const greenTextStyles = {
    color: "#33CC99",
}

const requiredFields = [
  "Email",
  "Password",
];

export const DesignLogin = (props: DesignLoginProps) =>  {
  const [isSignup, setIsSignup] = useState(false);
  const [loginState, setLoginState] = useState(
    {
      Email: "",
      Password: "",
    }
  );

  const setLoginInputState = (e:any) => {
    const { name, value } = e.target;
    setLoginState(prevState => ({ ...prevState, [name]: value }));
  }

  // GetUserByLogin calls GQL query to confirm if a login request is successful (user exists in the database)
  const { loading, error, data, refetch } = useQuery(GET_USER_BY_LOGIN, {
    variables: {
      email: "",
      password: "",
    },
  });

  function submitLogin() {
    // Call another GQL query based on user input
    console.log("logging in with email "+loginState.Email+" and password "+loginState.Password);
    refetch({
      email: loginState.Email,
      password: loginState.Password,
    });
    console.log(data);
    if (data !== undefined) {
      props.setUser({
        full_name: data.getUserByLogin.full_name,
        username: data.getUserByLogin.full_name,
        email: data.getUserByLogin.full_name,
        is_verified: data.getUserByLogin.full_name,
        is_admin: data.getUserByLogin.full_name,
      });
    }
  }

  return (
    !isSignup ?
    <div>
      <div className="container has-text-centered">
        <h1 className="title is-1">Login</h1>
      </div>
      <div className="formContainer" style={formContainerStyles}>
        <div className="container">
        {requiredFields.map((field) => (
            <div className="field" key={field+"-login-field"}>
              <label className="label">{field}</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder={field}
                  name={field}
                  onChange={setLoginInputState}
                ></input>
              </div>
            </div>
          ))}
        </div>
        <div className="signupPrompt" style={signupPromptStyles}>
          <p>New user? <a style={greenTextStyles} onClick={() => setIsSignup(true)}>Sign up!</a></p>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a className="button is-info" onClick={submitLogin}>Submit</a>
          </p>
        </div>
      </div>
    </div> :
    <LogicSignup
      setIsSignup={setIsSignup}
    />
  );
};
