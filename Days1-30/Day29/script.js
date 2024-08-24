let initKey = 0;
const imgCarrousel = document.querySelector('.images');
const carouselContainer = document.querySelector('.img-carrousel');

for (let i of imgCarrousel.children) {
  i.addEventListener('click', () => {
    for (let j of imgCarrousel.children) {
      j.style.height = '200px';
      j.style.width = '200px';
    }
    i.style.height = '250px';
    i.style.width = '250px';
    initKey = i.dataset.key - 1;
  });
}

const leftClick = document.querySelector('.fa-caret-left');
const rightClick = document.querySelector('.fa-caret-right');
leftClick.addEventListener('click', moveLeft);
rightClick.addEventListener('click', moveRight);

function moveLeft() {
  if (initKey <= 0) {
    return;
  }
  imgCarrousel.children[initKey].style.height = '200px';
  imgCarrousel.children[initKey].style.width = '200px';
  initKey--;
  imgCarrousel.children[initKey].style.height = '250px';
  imgCarrousel.children[initKey].style.width = '250px';
  imgCarrousel.scrollLeft -= 100; // Scroll left by 250 pixels
}

function moveRight() {
  if (initKey >= 6) {
    return;
  }
  imgCarrousel.children[initKey].style.height = '200px';
  imgCarrousel.children[initKey].style.width = '200px';
  initKey++;
  imgCarrousel.children[initKey].style.height = '250px';
  imgCarrousel.children[initKey].style.width = '250px';
  imgCarrousel.scrollLeft += 100; // Scroll right by 250 pixels
}

window.onload = function () {
  setTimeout(() => {
    imgCarrousel.children[initKey].style.height = '250px';
    imgCarrousel.children[initKey].style.width = '250px';
  }, 0);
};