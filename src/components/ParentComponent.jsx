import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const data = 'Hello from parent';
  return (
    <div>
      its in Parent  {data}
      <ChildComponent x={data}/>
    </div>
  );
}

export default ParentComponent;
