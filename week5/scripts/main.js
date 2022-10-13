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
    let itemList = document.querySelectorAll(".shopping li");
    itemList.forEach((item) => {
        if (item.innerText.includes("green")) {
            item.classList.add("greenText");
        }
    })
    // for (let item of document.querySelectorAll(".shopping li"))
    // {
    //     // console.log(item);
    //     if (item.innerText.includes("green")) {
    //         // console.log(item);
    //         item.classList.add("greenText");
    //     }
    // }
}

greeItems();

let clickButton = document.querySelector("#updateImage");
clickButton.addEventListener("click", changeButtonText);
function changeButtonText() {
    if (clickButton.innerText === "Click Me!")
    {
        clickButton.innerText = "Clicked!";
    }
    else if (clickButton.innerText = "Clicked!") {
        clickButton.innerText = "Click Me!";
    }
}

let shoppingCartImage = document.querySelector("#shoppingCart");
clickButton.addEventListener("click", updateImage, {once: true});

function updateImage(event) {
    console.log(event);
    shoppingCartImage.src = "images/shoppingCart.png";
    shoppingCartImage.alt = "shopping cart";
    shoppingCartImage.width = 50;
    shoppingCartImage.height = 50;
}

let buttons = document.querySelectorAll("#buttonContainer button");

for (let b of buttons) {
    b.addEventListener("mouseover", changeButtonBGColor);
}

function changeButtonBGColor (event) {
    // console.log(event);
    event.target.style.backgroundColor = event.target.innerText;
}