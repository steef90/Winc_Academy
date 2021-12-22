const age = 13;
const isFemale = false;
const driverStatus = "Glenn";

if (age >= 18 && isFemale == true) {
    console.log("Welcome! Come inside!")
} else if (age >= 18 && isFemale == false) {
    console.log("Sorry, you have to be a girl")
} else if (age <= 18 && isFemale == true) {
    console.log("Sorry, come back when you are 18")
} else {
    console.log("Sorry, you have to be over 18 and have to be a girl")
}

if (driverStatus == "bob") {
    console.log("You can drive home safe")
} else {
    console.log("Call a cab!")
}
