const days = document.querySelectorAll(".days div");
const preview = document.getElementById("eventPreview");

// may events

const events = {
  30: "Park clean-up - 30 May 10:00"
};

days.forEach(day => {
  day.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    day.classList.add("active");

    const dayNum = day.getAttribute("data-day");

    preview.innerHTML = events[dayNum] || "No events this day";
  });
});// FILTER
const filterBtn = document.querySelector(".filter-btn");
const dropdown = document.querySelector(".filter-dropdown");
const options = document.querySelectorAll(".filter-dropdown p");
const cards = document.querySelectorAll(".card");

filterBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "block" : "block";
});

options.forEach(option => {
  option.addEventListener("click", () => {
    const type = option.getAttribute("data-type");

    cards.forEach(card => {
      if (type === "all" || card.getAttribute("data-type") === type) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

    dropdown.style.display = "none";
  });
});