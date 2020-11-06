import React from "react";

interface DesignLoadingPageProps {}

export const DesignLoadingPage = () => {
  return (
    <div className="message is-warning">
      <div className="message-body has-background-light">
        <h2 className="subtitle">Digging through our database....</h2>
      </div>
    </div>
  );
};
