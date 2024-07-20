import { useState } from "react";


const TaskForm = ({ onFormSubmit }) => {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(task);
    setTask("");
  };

  return (
    <div className="wrapper">
      <div className="content-box">
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            className='add-input' 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <button className='add-btn'>Add</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;