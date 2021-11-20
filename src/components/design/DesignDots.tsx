import React from 'react';

interface DesignDots {
  page: string;
  marginRight?: string;
}

export const DesignDots = (props: DesignDots) => {
  const dotContainer = {
    display: 'flex',
    paddingTop: '.5rem',
    marginRight: props.marginRight,
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
    <div style={dotContainer}>
      {props.page === '1' ? 
      <div id={'dot1-pg' + props.page} style={greenDot}></div> :
      <div id={'dot1-pg' + props.page} style={dot}></div>}
      {props.page === '2' ? 
      <div id={'dot2-pg' + props.page} style={greenDot}></div> :
      <div id={'dot2-pg' + props.page} style={dot}></div>}
      {props.page === '3' ? 
      <div id={'dot3-pg' + props.page} style={greenDot}></div> :
      <div id={'dot3-pg' + props.page} style={dot}></div>}
      {props.page === '4' ? 
      <div id={'dot4-pg' + props.page} style={greenDot}></div> :
      <div id={'dot4-pg' + props.page} style={dot}></div>}
      {props.page === '5' ? 
      <div id={'dot5-pg' + props.page} style={greenDot}></div> :
      <div id={'dot5-pg' + props.page} style={dot}></div>}
    </div>)
}