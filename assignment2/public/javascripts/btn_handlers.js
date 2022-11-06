// View button of each card
let matches = document.querySelectorAll('[id^="viewButton"]');

// Show cat details
for (const viewButton of matches) {
  viewButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const card = e.target.parentElement.parentElement.parentElement;
    const doc_id = card.getAttribute("doc_id");

    const response = await fetch(`/api/db/read?doc_id=${doc_id}`);
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

// Delete button of each card
matches = document.querySelectorAll('[id^="deleteButton"]');

for (const deleteButton of matches) {
    deleteButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const card = e.target.parentElement.parentElement.parentElement;
    const doc_id = card.getAttribute("doc_id");

    const response = await fetch(`/api/db/delete?doc_id=${doc_id}`);
    // console.log(response);
    location.reload();
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
});