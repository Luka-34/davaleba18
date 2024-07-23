// App.js
import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Header from './Header';

const apiKey = "RFpu46yG7-_3R1g976kZwE7Cl2mSyei7pBGgZ-0fU5nGJPOA5A";

function App() {
  const [taskList, setTaskList] = useState([]);

  const onFormSubmit = (task) => {
    fetch('/api/v1/task', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify([{ task }])
    }).then(res => {
      if (!res.ok) throw new Error("Response failed");
      return res.json();
    }).then(data => {
      setTaskList((prev) => [
        ...prev, 
        {
          task: data.items[0].task,
          id: data.items[0]._uuid
        }
      ]);
    }).catch(err => console.log(err));
  };

  return (
    <div className="App">
      <Header />
      <TaskForm onFormSubmit={onFormSubmit} />
      <div className="content-box">
      <div className="content">
            <h1>Not Completed</h1>
            {taskList.map((task) => (
              <div key={task.id} className='box1'>
                <h3>{task.task}</h3>
              </div>
            ))}
            <h1>Completed</h1>
          </div>
          </div>
          </div>
  );
}

export default App;
