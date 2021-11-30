import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/manual.css";
import App from "./App";
import { ApolloClient, ApolloProvider, HttpLink, from } from "@apollo/client";
import { cache } from "./cache";
import { onError } from "@apollo/client/link/error";

// Add errorLink for more detail on errors generated on network and graphql level
const errorLink = onError(({ graphQLErrors, networkError }) => {
  // if (graphQLErrors)
  //   graphQLErrors.forEach(({ message, locations, path }) =>
  //     console.log(
  //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
  //     ),
  //   );

  // if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  // Backend uri for dev (CloudApps namespace: pichhim)
  // uri: "http://dev-backend-pichhim.apps.cloudapps.unc.edu/graphql"
  // Backend uri for prod
  uri: "https://back-end-dept-dietdatabase.cloudapps.unc.edu/graphql",
});

const client = new ApolloClient({
  cache,
  link: from([errorLink, httpLink]),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
