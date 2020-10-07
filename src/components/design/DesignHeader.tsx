import React from "react";

interface DesignHeaderProps {
}

export const DesignHeader = () => {
  return (

    <div className="container">
      <p className="title is-size-1">
        <strong> Avian Diet Database </strong>
      </p>
      <p className="subtitle is-4">
        This site presents bird diet information
        using data compiled by Prof. Hurlbert's lab
        in an interactive and easy to digest manner.
      </p>
    </div>
  );
};
