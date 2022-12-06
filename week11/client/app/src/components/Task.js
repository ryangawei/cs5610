import React from 'react'
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Task({ task, deleteHandler }) {
  return (
    <li key={task.id}>
      <div className='taskContainer'>
        
        <div className='iconNameContainer'>
          <p>
            <Link to={`/tasks/${task.id}`}>
              {task.title}
            </Link>
          </p>
          <p>{task.date}</p>
          <FaTimes onClick={() => deleteHandler(task.id)}/>
        </div>

      </div>
    </li>
    
  )
}
