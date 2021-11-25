import React from 'react';
import { remove } from './DesignSubmitData';
import { DesignGreenButton } from "../design/DesignGreenButton";


interface DesignErrorPopup {
  message: string,
}

export const DesignDots = (props: DesignErrorPopup) => {
  const container = {
    width: '550px',
    minHeight: '350px',
    backgroundColor: 'white',
  }
  
  const dot = {
    height: '.75rem',
    width: '.75rem',
    backgroundColor: '#C4C4C4',
    borderRadius: '50%',
    margin: '.5rem',
  
  }
  
  const greenDot = {
    height: '.75rem',
    width: '.75rem',
    backgroundColor: '#01B684',
    borderRadius: '50%',
    margin: '.5rem',
  }

  return (
    <div id="error-message" style={container}>
        <p>{props.message}</p>
        <div onClick={() => remove('error-message')}>
            <DesignGreenButton 
                buttonText={'Try Again'}
                className={'try-again'}
            />
        </div>
    </div>)
}