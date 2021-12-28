console.log("");
console.log("Welcome to my restaurant!");
console.log("");

let state = 0;

let pizzaCrust = ["Regular crust", "Cheese crust", "Fluffy crust"];
let pizzaCheese = ["Gouda", "Mozzerella", "Cheddar"];
let pizzaTop = ["Tuna", "Chicken", "Pepperoni"];

function pizza() {
    console.log("");
    console.log("Here is your pizza:");
    console.log("");
    console.log("Crust: ", pizzaCrust[Math.floor(Math.random() * 2)]);
    console.log("Cheese: ", pizzaCheese[Math.floor(Math.random() * 2)]);
    console.log("Topping: ", pizzaTop[Math.floor(Math.random() * 2)]);
}

let sushiRice = ["Regular rice", "Pandan rice", "brown rice"];
let sushiFill = ["Avocado", "Salmon", "Tofu"];
let sushiWrapper = ["Nori", "Crunch", "Inside out"];

function sushi() {
    console.log("");
    console.log("Here is your Sushi:");
    console.log("");
    console.log("Rice: ", sushiRice[Math.floor(Math.random() * 2)]);
    console.log("Filling: ", sushiFill[Math.floor(Math.random() * 2)]);
    console.log("Wrapper: ", sushiWrapper[Math.floor(Math.random() * 2)]);
}

function dinner() {
    if (state <= 1) {
        pizza();
        sushi();
        state++;
        dinner();
    } else if (state <= 2) {
        sushi();
        state++;
    } else {
        return;
    }
}

dinner();

