
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [arr,setArr]=useState([]);
  const [input,setInput]=useState("");
  function addTask(){
    let nums=[...arr,input];
    setArr(nums);
  }
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
        <h1>To-Do List</h1>
        <div>
          <input type="text" onChange={(e)=>setInput(e.target.value)}/>
          <button type="submit" onClick={addTask}>Add Todo</button>
        </div>
        <Todo data={arr}/>
    </div>
  )
}

export default App
