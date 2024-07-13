import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ show, setShow, dark, setTasks, tasks, editData, setEditData }) {
  const [desc, setDesc] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (show) {
      // Set the input and description fields when the modal opens
      if (editData.length > 0) {
        setInput(editData[0]);
        setDesc(editData[1]);
      } else {
        setInput("");
        setDesc("");
      }
    }
  }, [show, editData]);

  const handleAdd = (e) => {
    e.preventDefault();
    document.getElementById('addTaskInput').value = "";
    document.getElementById('addTaskDescription').value = "";

    if (input) {
      console.log("editData",editData);
      if (String(editData[0]).length > 0) {
        // Editing existing task
        const updatedTasks = tasks.map((task, index) => 
          index === editData[2] ? [input, desc] : task
        );
        setTasks(updatedTasks);
      } else {
        // Adding new task
        setTasks([...tasks, [input, desc]]);
      }

      setInput("");
      setDesc("");
      setEditData(["","",-1]);
      setShow(false);
    }
  }

  const handleClose = () => {
    setShow(false);
    setEditData(["","",-1]);
  }

  useEffect(()=>{
    console.log("editData[0]",editData[0]);
  },[editData])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{(String(editData[0]).length > 0) ? "Edit Task" : "Add Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="addTaskInput">Task:</label>
          <input
            type="text"
            className={dark ? "form-control dark-search" : "form-control"}
            id="addTaskInput"
            placeholder="Add task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <label htmlFor="addTaskDescription">Description:</label>
          <textarea
            type="text"
            className={dark ? "form-control my-5 dark-search" : "form-control"}
            id="addTaskDescription"
            placeholder="Add task"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button type="button" className="btn btn-primary my-2" onClick={handleAdd}>
            {String(editData[0]).length > 0 ? "Save Changes" : "Add"}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
