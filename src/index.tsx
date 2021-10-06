import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/manual.css";
import App from "./App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  cache,
  uri: "https://dev-back-end-dept-dietdatabase.cloudapps.unc.edu/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
