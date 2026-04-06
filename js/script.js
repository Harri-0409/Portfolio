const spreads   = document.querySelectorAll('.spread');
const prevBtn   = document.getElementById('prevBtn');
const nextBtn   = document.getElementById('nextBtn');
const pageNum   = document.getElementById('pageNum');
const pageTotal = document.getElementById('pageTotal');

let current   = 0;
let animating = false;
const DURATION = 720; // ms — must match CSS animation duration

pageTotal.textContent = spreads.length;

function updateButtons() {
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === spreads.length - 1;
  pageNum.textContent = current + 1;
}

function flipTo(newIndex, direction) {
  if (animating) return;
  if (newIndex < 0 || newIndex >= spreads.length) return;

  animating = true;

  const outSpread = spreads[current];
  const inSpread  = spreads[newIndex];

  const outClass = direction === 'next' ? 'flip-next-out' : 'flip-prev-out';
  const inClass  = direction === 'next' ? 'flip-next-in'  : 'flip-prev-in';

  // Show incoming page underneath immediately
  inSpread.classList.add('active');

  // Animate outgoing page flipping away
  outSpread.classList.remove('active');
  outSpread.classList.add(outClass);

  // After a short delay, start animating incoming page
  setTimeout(() => {
    inSpread.classList.add(inClass);
  }, 80);

  // Cleanup after animation
  setTimeout(() => {
    outSpread.classList.remove(outClass);
    inSpread.classList.remove(inClass);
    current = newIndex;
    updateButtons();
    animating = false;
  }, DURATION);
}

function nextPage() {
  if (current < spreads.length - 1) flipTo(current + 1, 'next');
}

function prevPage() {
  if (current > 0) flipTo(current - 1, 'prev');
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prevPage();
});

updateButtons();
