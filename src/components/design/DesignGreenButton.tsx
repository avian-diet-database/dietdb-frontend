import React from 'react';

interface DesignGreenButtonProps {
  buttonText: string;
  className: string;
}

const buttonStyle = {
    backgroundColor: '#01B684',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    color: 'white',
    fontSize: '18px',
}

export const DesignGreenButton = (props: DesignGreenButtonProps) => {
  return (
    <button className={"button " + props.className} style={buttonStyle}>
      {props.buttonText}
    </ button>)
}