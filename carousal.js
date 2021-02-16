const carousal = (function () {
  // ************************************ CAROUSAL SLIDER

  function slideCarousal(carousalSlidePostion) {
    const carousalSlide = document.querySelector('.carousal-slide');
    const carousalImageWidth = 940;
    carousalSlide.style.transform = 'translateX(' + -((carousalImageWidth + 10) * carousalSlidePostion) + 'px)';
    document.getElementsByName('carousal-radio-btn')[carousalSlidePostion].checked = true;
  }

  let carousalSlideCounter = 0;
  const time = 3000;
  let repeat;

  //  CarousalSlideSelector
  document.getElementsByName('carousal-radio-btn').forEach(elem => {
    elem.addEventListener('change', function (event) {
      clearTimeout(repeat);
      carousalSlideCounter = event.target.value - 1;
      slideCarousal(carousalSlideCounter);
      repeat = setTimeout('carousal.autoChangeCarousalSlide()', time);
    });
  });

  const carousalNoOfImages = document.querySelectorAll('.carousal-slide img').length;

  function moveCarousalSlideNext() {
    if (carousalSlideCounter >= carousalNoOfImages - 3) {
      carousalSlideCounter = 0;
      slideCarousal(carousalSlideCounter);
    } else {
      carousalSlideCounter++;
      slideCarousal(carousalSlideCounter);
    }
  }

  const carousalNextBtn = document.querySelector('#nextBtn');

  //  readCarousalClickNext
  carousalNextBtn.addEventListener('click', () => {
    moveCarousalSlideNext();
    clearTimeout(repeat);
    repeat = setTimeout('carousal.autoChangeCarousalSlide()', time);
  });

  function moveCarousalSlidePrev() {
    if (carousalSlideCounter <= 0) {
      carousalSlideCounter = carousalNoOfImages - 3;
      slideCarousal(carousalSlideCounter);
    } else {
      carousalSlideCounter--;
      slideCarousal(carousalSlideCounter);
    }
  }

  const carousalPrevBtn = document.querySelector('#prevBtn');

  //  readCarousalClickPrev
  carousalPrevBtn.addEventListener('click', () => {
    moveCarousalSlidePrev();
    clearTimeout(repeat);
    repeat = setTimeout('carousal.autoChangeCarousalSlide()', time);
  });

  // ***************************** AUTO CAROUSAL SLIDER TIMER

  function autoChangeCarousalSlide() {
    moveCarousalSlideNext();
    repeat = setTimeout('carousal.autoChangeCarousalSlide()', time);
  }
  //Initializing Auto Carousal Slider
  repeat = setTimeout('carousal.autoChangeCarousalSlide()', time);
  return {
    autoChangeCarousalSlide: autoChangeCarousalSlide,
  };
})();
