let current = 0;
const spreads = document.querySelectorAll(".spread");

function showPage(index) {
    spreads.forEach((spread, i) => {
        spread.classList.remove("active");
        if (i === index) {
            spread.classList.add("active");
        }
    });
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
