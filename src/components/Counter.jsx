import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>COUNTER</h1>
      <button onClick={()=>{setCount(count +1)}}> + </button> <br />
        {count} <br />
      <button onClick={()=>{setCount(count - 1)}}> - </button>
    </div>
  );
}

export default Counter;
