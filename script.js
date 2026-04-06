let spreads = document.querySelectorAll(".spread");
let current = 0;

function showPage(index) {
  spreads.forEach((spread, i) => {
    spread.classList.remove("active");
  });

  spreads[index].classList.add("active");
}

function nextPage() {
  if (current < spreads.length - 1) {
    current++;
    showPage(current);
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}