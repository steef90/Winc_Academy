console.log("");
console.log("We're going to paint the walls!");
console.log("");

let colors = ["green", "red", "blue", "yellow"];



function paintWall(thisWallColor, thisWallLocation) {
    console.log("The", thisWallLocation, "wall has been painted", thisWallColor);
}

paintWall("green", "North");

console.log("");
console.log("Answers:");
console.log("When you switch either the parameter OR the argument, the outcome will be the other way around. When you switch BOTH, the outcome will be like it should be. When one or more arguments are missing, 'undifinded' will show on the specific position.");