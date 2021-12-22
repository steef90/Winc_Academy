const age = 21;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Tinus";
const bill = 3;

if (age >= 18 && isFemale == true) {
    console.log("Welcome! Come inside!")
    if (age >= 18 && age <= 25) {
        console.log("You get 50% off!")
    } else {
        console.log("You have to pay in full")
    }

    if (bill >= 25 && bill <= 50) {
        console.log("You get a free snack!")
    } else if (bill >= 50 && bill <= 99) {
        console.log("You get free nachos!")
    } else if (bill >= 100) {
        console.log("You get a free bottle of champange!")
    }

} else if (age >= 18 && isFemale == false) {
    console.log("Sorry, you have to be a girl")
} else if (age <= 18 && isFemale == true) {
    console.log("Sorry, come back when you are 18")
} else {
    console.log("Sorry, you have to be over 18 and have to be a girl")
}

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("You get a free Beer!")
}



if (driverStatus == "bob") {
    console.log("You can drive home safe")
} else {
    console.log("Call a cab!")
}
