import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const appName = "Guoao's App";
  const [showForm, setShowForm] = useState(false);

  function onAddTaskToggle() {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <Header name={appName} onAddTaskToggle={onAddTaskToggle} />
      {showForm && <AddTask />}
      <ul>
        <TaskList />
      </ul>
    </div>
  );
}

export default App;
