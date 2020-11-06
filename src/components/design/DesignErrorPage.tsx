import React from "react";

interface DesignErrorPageProps {
  errorMessage: string;
}

export const DesignErrorPage = (props: DesignErrorPageProps) => {
  return (
    <div className="section">
      <div className="message is-danger">
        <div className="message-body">
          <h1 className="subtitle">{props.errorMessage}</h1>
        </div>
      </div>
    </div>
  );
};
