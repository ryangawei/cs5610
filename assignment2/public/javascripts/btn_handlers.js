const axios = import("axios");

// View button of each card
const matches = document.querySelectorAll('[id^="viewButton"]');

// Show cat details
for (const viewButton of matches) {
  viewButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const card = e.target.parentElement.parentElement.parentElement;
    const doc_id = card.getAttribute("doc_id");

    const response = await fetch(`http://localhost:3000/api/db/read?doc_id=${doc_id}`);
    const doc = await response.json();

    const staticId = document.getElementById("staticId");
    staticId.value = doc_id;
    
    const inputName = document.getElementById("inputName");
    inputName.value = doc.name;

    const inputSex = document.getElementById("inputSex");
    inputSex.value = doc.sex;

    const inputDOB = document.getElementById("inputDOB");
    let dob = new Date(doc.date_of_birth).toISOString().substring(0,10);
    inputDOB.value = dob;

    const inputBreed = document.getElementById("inputBreed");
    inputBreed.value = doc.breed;

    const inputCity = document.getElementById("inputCity");
    inputCity.value = doc.city;

    const inputProvince = document.getElementById("inputProvince");
    inputProvince.value = doc.province;
    }
  )
}

// Add button
document.getElementById('addButton').addEventListener("click", async (e) => {
  e.preventDefault()
  document.getElementById("inputForm").reset();
})

// Prevent form from being submitted if not valid
document.getElementById('inputForm').addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
    }
    form.classList.add('was-validated')
  // e.preventDefault()
  // const formData = new FormData(e.target);

  // const card = e.target.parentElement.parentElement.parentElement;
  // const doc_id = card.getAttribute("doc_id");

  // const body = {
  //   name: formData.inputName,
  //   sex: formData.inputSex,
  //   date_of_birth: formData.inputDOB,
  //   breed: formData.inputBreed,
  //   city: formData.inputCity,
  //   province: formData.inputProvince
  // }

  // // Insert a new record
  // if (doc_id == null) {
  //   const result = await axios.post(`http://localhost:3000/api/db/insert`, body)
  //   console.log(result);
  // } // Update a record
  // else {
  //   ;
  // }
});



// form.addEventListener("submit", (event) => {
//   const data = new FormData(form);

//   let format = data.get("format");
//   let formatString;
//   if (format == "date") {
//     formatString = "ddd mmm dd yyyy";
//   }
//   else if (format == "time") {
//     formatString = "h:MM:ss TT";
//   }
//   else {
//     throw "Unsupported time format."
//   }
  
//   const now = new Date();
//   let text = dateFormat(now, formatString);

//   let timeDisplay = document.querySelector(".time-display");
//   if (timeDisplay == null) {
//     timeDisplay = document.createElement("span");
//     timeDisplay.classList.add("time-display");
//     timeContainer.appendChild(timeDisplay);
//   }

//   timeDisplay.innerText = text;
//   // console.log(text)

//   event.preventDefault();
// }, false);