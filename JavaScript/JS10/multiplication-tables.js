const multiTable = function () {

    /*
    let q1 = prompt("Wich multiplication table you want to see? (1 - 10)");

    let output = document.getElementById("output");

    if(isNaN(q1)){
        output.innerHTML += "Enter a valid, round number";
        output.innerHTML += "<br> <br> <button onclick='reset()'>Reset</button>";
        return
    }else if (q1 > 10) {
        output.innerHTML += "too many numbers";
        output.innerHTML += "<br> <br> <button onclick='reset()'>Reset</button>";
        return
    };
    */

    output.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        for (let x = 1; x <= 10; x++){
            let answer = i * x;
            output.innerHTML += i + " x " + x + " = " + answer + "<br>";
        }
            output.innerHTML += "<br>";
            /*let answer = i * q1;
            output.innerHTML += i + " x " + q1 + " = " + answer + "<br>"; 
            */

    }

    output.innerHTML += "<br> All numbers checked";
    output.innerHTML += "<br> <br> <button onclick='reset()'>Reset</button>";

};
