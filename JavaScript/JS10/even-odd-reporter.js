
const evenOddReport = function () {

    let q1 = prompt("how many numbers do you want to check? (max. 200)");

    let output = document.getElementById("output");

    if(isNaN(q1)){
        output.innerHTML += "Enter a valid, round number";
        output.innerHTML += "<br> <br> <button onclick='reset()'>Reset</button>";
        return
    }else if (q1 > 200) {
        output.innerHTML += "Too many numbers";
        output.innerHTML += "<br> <br> <button onclick='reset()'>Reset</button>";
        return
    };

    output.innerHTML = "";

    for (let i = 1; i <= q1; i++) {
        console.log("Is ${i} even or odd?");
        const evenOdd = function (i) {
            if (i % 2 == 0) {
                return true;
            } else {
                return false;
            }
        };

        if (evenOdd(i) == false) {
            console.log("number " + i + " is odd");
            output.innerHTML += "number " + i + " is odd" + "<br>";
        } else {
            console.log("number " + i + " is even");
            output.innerHTML += "number " + i + " is even" + "<br>";
        }
    }

    output.innerHTML += "<br> All numbers checked";
    output.innerHTML += "<br> <br> <button onclick='reset()'>Reset</button>";

};


const reset = function () {
    let output = document.getElementById("output");
    output.innerHTML = "";
    
};
