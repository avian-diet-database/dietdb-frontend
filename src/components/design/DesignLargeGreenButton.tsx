import React from 'react';

interface DesignLargeGreenButtonProps {
  onClick: any;
  buttonText: string;
  className: string;
}

const buttonStyle = {
    backgroundColor: '#01B684',
    paddingRight: '80px',
    paddingLeft: '80px',
    color: 'white',
    fontSize: '25px',
    fontWeight: 'bold' as 'bold',
}

export const DesignLargeGreenButton = (props: DesignLargeGreenButtonProps) => {
  return (
    <button className={"button " + props.className} style={buttonStyle} onClick={props.onClick}>
      {props.buttonText}
    </ button>)
}