import React, { useState } from "react"
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import Example from "./components/Modal";
import Button from "react-bootstrap/esm/Button";

function App () {
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(["","",-1])

  const handleShow = () => setShow(true);
  const [tasks, setTasks] = useState([]);

  

  return (
    <div>
      <Example show={show} setShow={setShow} dark={darkMode} setTasks={setTasks} tasks={tasks} setEditData={setEditData} editData={editData} ></Example>
      <Navbar dark={darkMode} setDark={setDarkMode} ></Navbar>
      <Tasks dark={darkMode} handleShow={handleShow} tasks={tasks} setTasks={setTasks} setEditData={setEditData} editData={editData}  ></Tasks>
    </div>
  )
};

export default App;
