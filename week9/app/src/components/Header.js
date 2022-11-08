import React from "react";

export default function Header(props) {
  // console.log(props);
  return (
    <header className="headerContainer">
      <h1>Welcome to {props.name}</h1>
      <button>Add Task</button>
    </header>
  );
}
