import React from 'react';
import GrandChild from './GrandChild';

const ChildComponent = ({parentFn}) => {

const childFn = () => {
 
    const dataToSend = 'Data from child component';
    parentFn(dataToSend);
        
  }


  return (
    <div>
       <GrandChild/>
       
       <button onClick={childFn}>data sent to parent</button>
    </div>
  );
}

export default ChildComponent;
