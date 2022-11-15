import React, { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {"title": title, "date": date};
    console.log(data);
    
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("HTTP error! Status: ", response.status);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-control">
        <label>Title</label> 
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Date</label> 
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <input type="submit" value="Save Task"/>
    </form>
  );
}
