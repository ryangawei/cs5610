import React, { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({"title": title, "date": date});
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
