import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import {Routes, Route, Link } from 'react-router-dom'
import TaskDetails from "./components/TaskDetails";
import LoginButton from "./components/LoginButton"; 
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const appName = "Guoao's App";
  const [showForm, setShowForm] = useState(false);

  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  function onAddTaskToggle() {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/profile">Profile</Link>
        {isAuthenticated? <LogoutButton/> : <LoginButton/>}
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
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p>Nothing to match this path.</p>} />
      </Routes>

      
    </div>
  );
}

export default App;
