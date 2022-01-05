const gradeAssign = function () {

    let output = document.getElementById("output");
    output.innerHTML = "";

    const assignGrade = function (score) {
        if (score > 90) {
            return "A";
        } else if (score > 80) {
            return "B";
        } else if (score > 70) {
            return "C";
        } else if (score > 65) {
            return "D";
        } else {
            return "E";
        }
    };

    for (i = 60; i <= 100; i++) {
        const grade = assignGrade(i);

        output.innerHTML += "For scoring " + i + " points, you get an " + grade + "<br>";

    }

    output.innerHTML += "<br> All numbers checked";
    output.innerHTML += "<br> <br> <button onclick='reset()'>Reset</button>";


};
