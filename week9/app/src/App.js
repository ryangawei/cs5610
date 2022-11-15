import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const appName = "Guoao's App";



  return (
    <div className="App">
      <Header name={appName} />
      <AddTask />
      <ul>
        <TaskList />
      </ul>
    </div>
  );
}

export default App;
