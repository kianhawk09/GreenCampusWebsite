const btn = document.getElementById("button1");

let count = 0;

// Add EventListener to btn
btn.addEventListener("click", function () {
  count++;
  document.getElementById("H4_2").textContent = count + "/10";
});