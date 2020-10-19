import React from 'react';

interface DesignButtonProps {
buttonText: string;
className: string;
onClick: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DesignButton = (props : DesignButtonProps) => {
  return (<div className = "field">
            <button className = {"button " + props.className} onClick = {props.onClick}>
                {props.buttonText}
            </ button>
          </ div>)
}
