import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/manual.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://back-end-dept-dietdatabase.cloudapps.unc.edu/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
