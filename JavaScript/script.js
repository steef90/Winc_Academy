let name = prompt("What is your name?");
let output1 = document.getElementById("output1");
let chances = 4;
let output2 = document.getElementById("output2");

//Welcome message
output1.innerHTML = "Welcome to the game " + name + "! <br> <br> Push the button to guess a number. <br><br> <button onclick='start()'>Start game</button>";

//Start the game
const start = function () {

    chances = 4;
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    output2.innerHTML = "";
    let number = (Math.floor(Math.random() * 24) + 1);
    console.log(number);
    game(number);

};

//The actual game
const game = function (number) {

    console.log(chances);
    //Checking if there are any chances left
    if (chances > (-1) && chances <= 4) {
        let gues = prompt("Fill out a number between 0 and 25");
        //Checking if input is a valid number
        if (isNaN(gues) || gues < 0 || gues > 25) {
            output2.innerHTML = "Start over and enter a valid number!";
            chances = 4;
            return;
            //Checking if number is guessed right
        } else if (gues == number) {
            output2.innerHTML = "You guessed it right! You won!";
            document.body.style.backgroundColor = "green";
            document.body.style.color = "white";
            chances = 4;
            return;
            //Checking if it is the last chance
        } else if (chances == 0) {
            output2.innerHTML = "You are out of chances!";
            document.body.style.backgroundColor = "red";
            document.body.style.color = "orange";
            return;
            //Checking how many chances are left
        } else {
            output2.innerHTML = "You have " + chances + " chance(s) left. push the button to try again! <br><br> <button onclick='game(" + number + ")'>Try again</button>";
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            chances--;
            return;
        }
        //End the game
    } else {
        output2.innerHTML = "";
        document.body.style.backgroundColor = "red";
        document.body.style.color = "orange";
        output2.innerHTML = "You are out of chances!"
        chances = 4;
        return;
    }
}

