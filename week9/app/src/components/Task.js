import React from 'react'
import { FaTimes } from "react-icons/fa";

export default function Task({ task, deleteHandler }) {
  return (
    <li key={task.id}>
      <div className='taskContainer'>
        
        <div className='iconNameContainer'>
          <p>{task.title}</p>
          <p>{task.date}</p>
          <FaTimes onClick={() => deleteHandler(task.id)}/>
        </div>

      </div>
    </li>
    
  )
}
