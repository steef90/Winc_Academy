//CHECKING IF A NUMBER IS BIG
console.log("");
console.log("Part 1: Checking if a number is big");

function numCheck(num) {
    if (num > 100) {
        console.log("Number is bigger than 100");
        return true;

    } else if (num <= 100) {
        console.log("Number is smaller than 100");
        return false;
    }
}

const checkNumber = numCheck(10);
console.log(checkNumber);

//BOUNCER AT A CLUB
console.log("");
console.log("Part 2: Bouncer at a club");

let maxPers = 100;
let curPers = 0;
let agePers = 0;

function bouncer(maxPers, curPers, agePers) {
    if (curPers > maxPers) {
        return "It's too busy now, come back later";
    } else if (agePers < 18) {
        return "This is a club for adults";
    } else {
        return "Come in!";
    }
}

const brenda = bouncer(maxPers, 10, 18);
console.log(brenda);

//CALCULATING THE AVERAGE
console.log("");
console.log("Part 3: Calculating the average");

function average(numOne, numTwo, numThree, numFour, numFive) {
    let sum = (numOne + numTwo + numThree + numFour + numFive) / 5;
    let rounded = Math.round(sum);
    return rounded;
}

const solution = average(20, 15, 80, 5, 1);
console.log(solution);




