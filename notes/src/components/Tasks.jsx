import React, { useEffect } from "react"
import "./Tasks.css"
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function Tasks ({dark, handleShow, tasks, setTasks, editData, setEditData}) {

  function removeTask(index){
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  }
  const handleEdit =(i) =>{
    const editTask = tasks.filter((_, taskIndex) => taskIndex == i)
    console.log("a",editTask[0])
    setEditData([...editTask[0],i])
    handleShow();
  }



  return (
    <div className={(dark)? "tasks-container bg-dark" : "tasks-container "} >   
      <div className="form-group ">
        <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>
      </div>
      <div className="tasks-display my-5 mx-3 " >
        {tasks.map((task, index)=>(
          <div className={(dark)?"single-task my-3 dark-card row " : "single-task my-3 "  }  key={index}  >
            <div className="task-desc tooltip-container col-10 " onClick={()=>removeTask(index)}>
            <span><b>{task[0]}</b></span><p>{task[1]}</p>
            <span className="tooltip">Mark this as done</span>
            </div>
            <div className="task-options" >
              <button onClick={()=>handleEdit(index)} >E</button>
              <button onClick={()=>removeTask(index)}>D</button>
            </div>
            
            </div>
        ))}
      </div>
    </div>
  )
};

export default Tasks;
