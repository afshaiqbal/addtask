
import './App.css';
import Employee from './components/Employee';
import {React, useState } from 'react';
import Task from './components/Task';
import AddEmployee from './components/AddEmployee';

function App() {
  const[showModal,setShowModal]=useState(false);
  const[tasks,setTask]=useState([]);
  const addEmployee=text=>{
    const newEmployee=[...tasks,{text}];
    setTask(newEmployee);
  }
  const removeEmployee=index=>{
    const newEmployee=[...tasks];
    alert(`Please confirm if you want to remove ${'details'}`)
    newEmployee.splice(index,1);
    setTask(newEmployee);
  }
  // const editEmployee=()=>{
  //   alert("Do you want to edit");
  // }
  const add=()=>{
   setShowModal(prev=>(!prev));
  }
  
  return (
    <div className="App">
      <div>
      <h2>Employee Information</h2>
      <button onClick={add} >Add</button>
      <AddEmployee showModal={showModal}setShowModal={setShowModal}/>
      </div>
      <div className="list">
        {tasks.map((task,index)=>(
          <Task
          key={index}
          index={index}
          task={task}
          // editEmployee={editEmployee}
          removeEmployee={removeEmployee}
          />
        ))}
        {/* <AddEmployee/> */}
      <Employee addEmployee={addEmployee}/>
    </div>
    </div>
  );
}

export default App;
