import React, { useState } from "react";

import "./Taskadd.css";


function Taskadd({ result,edit,index,delet,handleCheck}) {
  
  //  console.log('result===>', result);
       
  return (
    <div className="result">
    
      <div className="check">
        <input type="checkbox"  checked={result.checked} onChange={(e) => {handleCheck(e, index)}}/>
      </div>

      <div className={`store ${result.checked ? 'stricke' : ''}`}>{result.taskName}</div>

      <div className="delete">
        <button onClick={() => {edit(index)}}>Edit</button>&nbsp;
        <button onClick={() => {delet(index)}} >Delete</button>
      </div>
    </div>
  );
}

export default Taskadd;
