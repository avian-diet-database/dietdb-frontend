import React from "react";

interface DesignErrorPageProps {
  errorMessage: string;
  minHeight?: number;
}

export const DesignErrorPage = (props: DesignErrorPageProps) => {
  return (
    <div className="section" style={{ minHeight: props.minHeight || 50 }}>
      <div className="message is-danger">
        <div className="message-body">
          <h1 className="subtitle">{props.errorMessage}</h1>
        </div>
      </div>
    </div>
  );
};
