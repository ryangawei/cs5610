import { useState } from "react";
import Task from "./Task";


function TaskList() {
  const [tasks, setTasks] = useState([
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
  ]);

  const deletePressed = (deletedId) => {
    console.log("Clicked " + deletedId);
    setTasks(tasks.filter((item) => item.id !== deletedId));
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
