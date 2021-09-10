var tut_div = document.getElementById("tutorial")
var count = 0;
function skip_tut() {
    tut_div.style.display = "none";

}
function tutorial() {
    tut_div.style.display = "block";
    count = 0;
    pg0();
}
function next_pg() {
    count += 1;
    if (count == 1) {
        pg1();
    }
    else if (count == 2) {
        pg2();
    }
    else if (count == 3) {
        pg3();
    }
    else if (count == 4) {
        pg4();
    }
    else if (count == 5) {
        pg5();
    }
    else if (count == 6) {
        skip_tut();
    }

}
function pre_pg() {
    if (count > 0) {
        count -= 1;
    }
    if (count == 1) {
        pg1();
    }
    else if (count == 2) {
        pg2();
    }
    else if (count == 3) {
        pg3();
    }
    else if (count == 4) {
        pg4();
    }
    else if (count == 5) {
        pg5();
    }
    else if (count == 0) {
        pg0();
    }
}
function pg0() {
    let cnt = document.getElementById("tutorialCounter");
    cnt.innerText = (count + 1) + "/6";
    let img = document.getElementById("tut_image");
    img.src = "tut_icon1.gif";
    let info = document.getElementById("info");
    info.innerText = " This short tutorial will walk you through all of the features of PathFinder."

}
function pg1() {
    document.getElementById("nextButton").innerText = "Next";
    let cnt = document.getElementById("tutorialCounter");
    cnt.innerText = (count + 1) + "/6";
    let img = document.getElementById("tut_image");
    img.src = "tut_icon2.gif";
    let info = document.getElementById("info");
    info.innerText = "Choose the size of Grid and the speed .Click on Apply."

}
function pg2() {
    document.getElementById("nextButton").innerText = "Next";
    let cnt = document.getElementById("tutorialCounter");
    cnt.innerText = (count + 1) + "/6";
    let img = document.getElementById("tut_image");
    img.src = "tut_icon3.gif";
    let info = document.getElementById("info");
    info.innerText = "Enter the source and destination cordinates ',' separated (indexed by 0)."


}
function pg3() {
    document.getElementById("nextButton").innerText = "Next";
    let cnt = document.getElementById("tutorialCounter");
    cnt.innerText = (count + 1) + "/6";
    let img = document.getElementById("tut_image");
    img.src = "tut_icon4.gif";
    let info = document.getElementById("info");
    info.innerText = "Click New Grid to generate a random grid  ."
}
function pg4() {
    document.getElementById("nextButton").innerText = "Next";
    let cnt = document.getElementById("tutorialCounter");
    cnt.innerText = (count + 1) + "/6";
    let img = document.getElementById("tut_image");
    img.src = "tut_icon5.gif";
    let info = document.getElementById("info");
    info.innerText = "Click DFS Route to simulate DFS."
}
function pg5() {
    let cnt = document.getElementById("tutorialCounter");
    cnt.innerText = (count + 1) + "/6";
    document.getElementById("nextButton").innerText = "Close";
    let img = document.getElementById("tut_image");
    img.src = "tut_icon6.gif";
    let info = document.getElementById("info");
    info.innerText = "Click BFS Route to simulate BFS."

}