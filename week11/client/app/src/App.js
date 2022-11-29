import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import {Routes, Route, Link } from 'react-router-dom'
import TaskDetails from "./components/TaskDetails";


function App() {
  const appName = "Guoao's App";
  const [showForm, setShowForm] = useState(false);

  function onAddTaskToggle() {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
          <Header name={appName} onAddTaskToggle={onAddTaskToggle} />
          {showForm && <AddTask />}
          </>
        }
        />
        
        <Route path="/tasks" element={
          <ul>
            <TaskList />
          </ul>} 
        />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="*" element={<p>Nothing to match this path.</p>} />
      </Routes>

      
    </div>
  );
}

export default App;
