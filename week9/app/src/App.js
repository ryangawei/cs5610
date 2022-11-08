import Header from "./components/Header";

function addLi(task) {
}

function App() {
  const appName = "Guoao's App";

  const tasks = [
    {
      id: 1,
      title: "Review week 9 material",
      date: "June 4th at 1 pm",
    },
    {
      id: 2,
      title: "Do quiz 9",
      date: "June 4th at 6 pm",
    },
    {
      id: 3,
      title: "Work on assignment 2",
      date: "June 5th at 8 am",
    },
  ];

  return (
    <div className="App">
      <Header name={appName} />
      <ul>
        {tasks.map((item) => { return <li>{item.title}</li>; })}
      </ul>
    </div>
  );
}

export default App;
