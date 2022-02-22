const currentImg = document.querySelector('#current');
const allImgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// First image opacity
allImgs[0].style.opacity = opacity;

allImgs.forEach((img) => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset opacity
  allImgs.forEach((img) => (img.style.opacity = 1));

  // Change current image to src of clicked img
  currentImg.src = e.target.src;

  // Add fade in class
  currentImg.classList.add('fade-in');

  // Remove fade-in class after 0.5s
  setTimeout(() => currentImg.classList.remove('fade-in'), 500);

  // Change opacity to selected img
  e.target.style.opacity = opacity;
}
