const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");

let count1 = 0;
let count2 = 0;
let count3 = 0;

// Add EventListener to btn
btn1.addEventListener("click", function () {
    if (count1 == 0) {
        alert("You have recycled an item!");
    }
    
    if (count1 == 10) {
        alert("Congratulations! You have completed the challenge!");
        return;
    }
    count1++;
    document.getElementById("H4_2").textContent = count1 + "/10";
});

btn2.addEventListener("click", function () {
    if (count2 == 0) {
        alert("You have taken the bus!");
    }
    
    if (count2 == 3) {
        alert("Congratulations! You have completed the challenge!");
        return;
    }
    count2++;
    document.getElementById("H5_2").textContent = count2 + "/3";
});

btn3.addEventListener("click", function () {
    if (count3 == 0) {
        alert("You have bought from a local shop!");
    }
    
    if (count3 == 2) {
        alert("Congratulations! You have completed the challenge!");
        return;
    }
    count3++;
    document.getElementById("H6_2").textContent = count3 + "/2";
});