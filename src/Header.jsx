import React, { useRef, useState } from "react";
import "./header.css";
import Taskadd from "./Taskadd";

function Header() {

  const [storedata, setdata] = useState([]);
  const [buttontext, setbutton] = useState("Add");
  const [inputVal, setinputVal] = useState("");
  
  

  const [Ind, setindex] = useState("-1");

  const inputresult = useRef();

  const edit = (index) => {
    setbutton("Update");

    setindex(index);
    setinputVal(storedata[index]["taskName"]);
    console.log(inputVal);
    inputresult.current.focus();
  };

  const delet = (index) => {
    setdata(storedata.filter((_, i) => i !== index));
  };

  function click(Ind) {
    const output = inputresult.current.value;
    let tempData = storedata;
       
    if (Ind >= 0) {  
       tempData[Ind]["taskName"] = inputVal;
      
    } else {
      tempData.push({ taskName: inputVal, checked: false });
      
    }
    inputresult.current.focus();
    setdata([...tempData]);
    setinputVal("");
    setbutton("Add");
    setindex("-1");
  }

  function handleCheck(event, index) {
    let tempData = storedata;
   
       
    tempData[index]["checked"] = event.target.checked;
       
    // let result = storedata[storedata.length-1];
    // storedata[storedata.length-1] = tempData[index];
    // tempData[index] = result
    
       
       
    setdata([...tempData]);
    
  }
 
  const handleSubmit = (e)=>{
     if(e.key == 'Enter'){
     click()
     }
  }

  return (
    <div className="main">
      <div className="t1">
        <div className="t2">
          <p>Task Manager</p>
          <input
            type="text"
            value={inputVal}
            ref={inputresult}
            placeholder="Enter the task to add"
            onChange={(e) => setinputVal(e.currentTarget.value)}
            onKeyDown={handleSubmit}
          />
          <button className="add" 
          onClick={() => click(Ind)} 
          >
            {buttontext}
          </button>
        </div>
        <div className="list">
          {storedata.map((item, index) => (
            <Taskadd
              key={index}
              result={item}
              index={index}
              edit={edit}
              delet={delet}
              handleCheck={handleCheck}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
