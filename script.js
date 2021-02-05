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
    carousalSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  carousalSlide.style.transition = 'transform 1s ease-in-out';
  counter++;
  carousalSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  document.getElementsByName('radio-btn')[counter - 1].checked = true;
}
function movePrev() {
  if (counter <= 1) {
    counter = carousalImages.length - counter;
    carousalSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  carousalSlide.style.transition = 'transform 1s ease-in-out';
  counter--;
  carousalSlide.style.transform = 'translateX(' + -size * counter + 'px)';
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
    carousalSlide.style.transform = 'translateX(' + -size * counter + 'px)';
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

mprevBtn.addEventListener('click', () => {
  console.log('prev');
  movieList.style.transform = 'translateX(' + -moviepanelsize * 0 + 'px)';
  mnextBtn.classList.toggle('hide');
  mprevBtn.classList.toggle('hide');
});

mnextBtn.addEventListener('click', () => {
  console.log('next');
  movieList.style.transform = 'translateX(' + -moviepanelsize * 5.55 + 'px)';
  mnextBtn.classList.toggle('hide');
  mprevBtn.classList.toggle('hide');
});
