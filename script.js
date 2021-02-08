// CAROUSAL
const carousalSlide = document.querySelector('.carousal-slide');
const carousalImages = document.querySelectorAll('.carousal-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carousalImages[0].clientWidth;
//Starting Position
carousalSlide.style.transform = 'translateX(' + -size * counter + 'px)';
// Next and Prev Functions
function moveNext() {
  if (counter >= carousalImages.length - 2) {
    counter = carousalImages.length - 7;
    carousalSlide.style.transform = 'translateX(' + -(size * counter + 10 * counter) + 'px)';
  }
  carousalSlide.style.transition = 'transform 1s ease-in-out';
  counter++;
  carousalSlide.style.transform = 'translateX(' + -(size * counter + 10 * counter) + 'px)';
  document.getElementsByName('radio-btn')[counter - 1].checked = true;
}
function movePrev() {
  if (counter <= 1) {
    counter = carousalImages.length - counter;
    carousalSlide.style.transform = 'translateX(' + -(size * counter + 10 * counter) + 'px)';
  }
  carousalSlide.style.transition = 'transform 1s ease-in-out';
  counter--;
  carousalSlide.style.transform = 'translateX(' + -(size * counter + 10 * counter) + 'px)';
  document.getElementsByName('radio-btn')[counter - 1].checked = true;
}
//Button Listeners
const time = 5000;
let repeat;
nextBtn.addEventListener('click', () => {
  moveNext();
  clearTimeout(repeat);
  repeat = setTimeout('changeSlide()', time);
});
prevBtn.addEventListener('click', () => {
  movePrev();
  clearTimeout(repeat);
  repeat = setTimeout('changeSlide()', time);
});

function changeSlide() {
  moveNext();
  repeat = setTimeout('changeSlide()', time);
}
window.onload = setTimeout('changeSlide()', time);

document.getElementsByName('radio-btn').forEach(elem => {
  elem.addEventListener('change', function (event) {
    clearTimeout(repeat);
    counter = event.target.value;
    carousalSlide.style.transform = 'translateX(' + -(size * counter + 10 * counter) + 'px)';
    repeat = setTimeout('changeSlide()', time);
  });
});
// ****
// MOVIE LIST

const mprevBtn = document.querySelector('#mprevBtn');
const mnextBtn = document.querySelector('#mnextBtn');
const movieList = document.querySelector('.movie-list');
const movieListItems = document.querySelectorAll('.movie-list-item');
const moviepanelsize = movieListItems[0].clientWidth;
let shiftFlag = false;
mprevBtn.addEventListener('click', () => {
  console.log('prev');
  movieList.style.transform = 'translateX(' + -moviepanelsize * 0 + 'px)';
  mnextBtn.classList.remove('hide');
  mprevBtn.classList.add('hide');
});

mnextBtn.addEventListener('click', () => {
  console.log('next');
  movieList.style.transform = 'translateX(' + -moviepanelsize * 5.55 + 'px)';
  mnextBtn.classList.add('hide');
  mprevBtn.classList.remove('hide');
});
const viewAll = document.querySelector('#viewAll');
viewAll.addEventListener('click', () => {
  movieList.style.transform = 'translateX(' + -moviepanelsize * 0 + 'px)';
  shiftFlag = !shiftFlag;
  if (shiftFlag == true) {
    mnextBtn.classList.add('hide');
    mprevBtn.classList.add('hide');
  } else if (shiftFlag == false) {
    mprevBtn.classList.add('hide');
    mnextBtn.classList.remove('hide');
  }
  movieList.classList.toggle('wrap');
});
movieListItems.forEach((movie, i) => {
  movie.addEventListener('click', function (event) {
    window.open('./movieinfo.html?movie=' + i, '_self');
  });
});
