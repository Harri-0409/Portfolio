const spreads  = document.querySelectorAll('.spread');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const pageNum  = document.getElementById('pageNum');
const pageTotal = document.getElementById('pageTotal');

let current   = 0;
let animating = false;

// Set total page count
pageTotal.textContent = spreads.length;

function updateButtons() {
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === spreads.length - 1;
  pageNum.textContent = current + 1;
}

function showPage(newIndex, direction) {
  if (animating) return;
  if (newIndex < 0 || newIndex >= spreads.length) return;

  animating = true;

  const outClass = direction === 'next' ? 'flip-out-right' : 'flip-out-left';
  const inClass  = direction === 'next' ? 'flip-in-right'  : 'flip-in-left';

  const outSpread = spreads[current];
  const inSpread  = spreads[newIndex];

  // Start flip-out on current spread
  outSpread.classList.remove('active');
  outSpread.classList.add(outClass);

  // After half the duration, show incoming spread
  setTimeout(() => {
    inSpread.classList.add('active', inClass);
  }, 200);

  // Clean up after animation completes
  setTimeout(() => {
    outSpread.classList.remove(outClass);
    inSpread.classList.remove(inClass);
    current = newIndex;
    updateButtons();
    animating = false;
  }, 520);
}

function nextPage() {
  if (current < spreads.length - 1) {
    showPage(current + 1, 'next');
  }
}

function prevPage() {
  if (current > 0) {
    showPage(current - 1, 'prev');
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prevPage();
});

// Initial state
updateButtons();
