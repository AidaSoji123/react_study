import React from 'react';
import GrandChild from './GrandChild';

const ChildComponent = (props) => {
  return (
    <div>
      <h1>in child {props.x}</h1>
      <GrandChild y={props.x}/>
    </div>
  );
}

export default ChildComponent;
