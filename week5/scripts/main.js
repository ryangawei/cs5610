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
let shoppingItems = ["bread", "cheese", "green pepper"];

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

squareListItems();

function greeItems() {
    for (let item of document.querySelectorAll(".shopping li"))
    {
        // console.log(item);
        if (item.innerText.includes("green")) {
            // console.log(item);
            item.classList.add("greenText");
        }
    }

}

greeItems();
