/*Hey kiddo*/
console.log("|Assignment 1: 'Hey kiddo'|");
console.log("");

const ageCheck = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const message = function (age) {
    if (ageCheck(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

//Under 18
const showMessage1 = message(17);
console.log(showMessage1);

//18 or over
const showMessage2 = message(18);
console.log(showMessage2);

//VAT calculations
console.log("");
console.log("|Assignment 2: 'VAT calculations'|");
console.log("");



const form = function(){
    let q1 = prompt("enter 'addVAT' or 'subVAT'");
    if (q1 == "addVAT"){
        let q2 = prompt("Enter baseprice");
        let q3 = prompt("Enter VAT percentage");
        const showOutput1 = callVAT1(q2, q3);
        console.log("\u20AC " + showOutput1);
        return;
    }else{
        let q4 = prompt("Enter total price");
        let q5 = prompt("Enter VAT percentage");
        const showOutput2 = callVAT2(q4, q5);
        console.log(showOutput2);
        return;
    }
}


const addVAT = function (basePrice, VAT){
    return basePrice * (1 + (VAT/100)); 
};

const subVAT = function (totalPrice, VAT){
    basePrice = (totalPrice / (1 + (VAT/100))); 
    let roundBase = Math.round(basePrice);
    vatPrice = (totalPrice - (totalPrice/(1 + (VAT/100))));
    let roundVat = Math.round(vatPrice);
    return [roundBase, roundVat];
};

const callVAT1 = function (basePrice, VAT){
    return addVAT(basePrice, VAT);
};

const callVAT2 = function (totalPrice, VAT){
    return subVAT(totalPrice, VAT);
};

form();


