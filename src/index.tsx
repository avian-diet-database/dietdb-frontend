import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/manual.css";
import App from "./App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  cache,
  // TODO: When finalizing changes in prod, can just uncomment prod DB link (line 13)
  uri: "http://test-dietdb-backend-git-pichhim.apps.cloudapps.unc.edu/graphql",
  // uri: "https://back-end-dept-dietdatabase.cloudapps.unc.edu/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
