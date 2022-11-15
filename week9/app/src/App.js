import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const appName = "Guoao's App";



  return (
    <div className="App">
      <Header name={appName} />
      <ul>
        <TaskList />
      </ul>
    </div>
  );
}

export default App;
