import { useEffect, useState } from "react";
import Task from "./Task";


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("http://localhost:5000/api/tasks");
        if (!response.ok) {
          throw new Error("HTTP error! Status: ", response.status);
        }
        const data = await response.json();
        console.log(data);

        setTasks(data);

      } catch (err) {
        console.log("Fetch data ", err);
      }
    }

    fetchData();
  }, [])

  const deletePressed = async (deletedId) => {
    // console.log("Clicked " + deletedId);
    // setTasks(tasks.filter((item) => item.id !== deletedId));
    const response = await fetch(`http://localhost:5000/tasks/${deletedId}`, {
      method: "DELETE"
    });
  };

  if (tasks.length === 0) {
    return <li>No tasks left</li>;
  } 
  
  return (
    <>
      { tasks.map((item) => { return <Task key={item.id} task={item} deleteHandler={deletePressed} />; }) }
    </>
    );
}

export default TaskList;
