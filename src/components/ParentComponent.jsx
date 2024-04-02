import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const [data,setData] = useState('');

    const parentFn = (x) => {
        setData(x);
    }

  return (
    <div>
        <h1>Data from the Child: {data} </h1>
      <ChildComponent parentFn = {parentFn}/>
    </div>
  );
}

export default ParentComponent;
