let colors = ["yellow", "blue", "red", "orange"];


// While loop

let color1 = 0;

while (color1 <= (colors.length - 1)) {
    console.log(colors[color1]);
    color1++;
}

//for loop

for (i = 0; i <= (colors.length - 1); i++) {
    console.log(colors[i]);
}

//Array method

colors.forEach(x => console.log(`test ${x}`));


/* |Questions|

While loop: 4 lines
For loop: 3 lines

Array method; 1 line

Array method is easier because you don't have to worry about an infinte loop and adding or substracting tot the variable.

You can use Object entries. There is no example code showing.


*/