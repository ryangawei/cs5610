// function getNumber() {
//     let radius;
//     do {
//         radius = window.prompt(
//             "Please enter the radius:"
//         );
//     } while (isNaN(radius));
//     return radius;
// }

// let radius = getNumber();

// function calculateArea(radius) {
//     return Math.PI * (radius**2);
// }

// let area = calculateArea(radius);

// const radius_p = document.querySelector("#radius");
// const result_p = document.querySelector("#result");

// radius_p.textContent += ` ${radius}`;
// result_p.textContent += ` ${area}`;

let shoppingListElement = document.querySelector(".shopping");
let shoppingItems = ["bread", "cheese", "pepper"];

function populateList(arr) {
    for (let item of shoppingItems) {
        let li = document.createElement("li");
        li.innerText = item;
        shoppingListElement.appendChild(li);
    }
}

populateList(shoppingItems);

function squareListItems() {
    // shoppingListElement.setAttribute("class", "squareList");
    shoppingListElement.classList.add("squareList");
}

squareListItems()
