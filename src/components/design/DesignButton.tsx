import React from 'react';

interface DesignButtonProps {
  buttonText: string;
  className: string;
}

export const DesignButton = (props: DesignButtonProps) => {
  return (<div className="field">
    <button className={"button " + props.className}>
      {props.buttonText}
    </ button>
  </ div>)
}
