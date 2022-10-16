import {dateFormat} from "./date.format.js";

const form = document.querySelector(".radio-form");
const timeContainer = document.querySelector(".time-container");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);

  let format = data.get("format");
  let formatString;
  if (format == "date") {
    formatString = "ddd mmm dd yyyy";
  }
  else if (format == "time") {
    formatString = "h:MM:ss TT";
  }
  else {
    throw "Unsupported time format."
  }
  
  const now = new Date();
  let text = dateFormat(now, formatString);

  let timeDisplay = document.querySelector(".time-display");
  if (timeDisplay == null) {
    timeDisplay = document.createElement("span");
    timeDisplay.classList.add("time-display");
    timeContainer.appendChild(timeDisplay);
  }

  timeDisplay.innerText = text;
  // console.log(text)

  event.preventDefault();
}, false);