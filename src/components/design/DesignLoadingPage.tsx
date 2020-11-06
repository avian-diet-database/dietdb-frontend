import React from "react";

interface DesignLoadingPageProps {}

export const DesignLoadingPage = () => {
  return (
    <div className="message is-dark">
      <div className="message-header">
        <p>Your content is currently loading!</p>
      </div>
      <div className="message-body has-background-light">
        <h2 className="subtitle">Digging through bird database....</h2>
      </div>
    </div>
  );
};

