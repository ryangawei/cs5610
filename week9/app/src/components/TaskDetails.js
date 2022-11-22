import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function TaskDetails({task}) {
  const params = useParams();
  const taskId = params.taskId;

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const response = await fetch(`http://localhost:5000/users?task=${taskId}`);
        if (!response.ok) {
          throw new Error("HTTP error! Status: ", response.status);
        }
        const data = await response.json();
        setUser(data[0]);
        console.log(data);
      } catch (err) {
        console.log("Fetch data ", err);
      }
    }

    fetchUser();
  }, [])


  console.log(params);
  return (
    <div>
      <p>
        You are viewing details of task {params.taskId}
      </p>
      <p>
        {user.name} is responsible for this task
      </p>
    </div>
  )
}
