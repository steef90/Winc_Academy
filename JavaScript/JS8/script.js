
function sumOne(numOne, numTwo) {
    outputOne = (((numOne ^ 2) + (numTwo ^ 2)) ^ 2);
    return outputOne;
}

const sumTwo = function (numOne, numTwo) {
    outputTwo = (((numOne ^ 2) + (numTwo ^ 2)) ^ 2);
    return outputTwo;
};

const sumThree = (numOne, numTwo) => {
    outputThree = (((numOne ^ 2) + (numTwo ^ 2)) ^ 2);
    return outputThree;
};

mathOne = sumOne(20, 45);
mathTwo = sumTwo(20, 45);
mathThree = sumThree(20, 45);

console.log(mathOne);
console.log(mathTwo);
console.log(mathThree);
