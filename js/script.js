OpenBurger();

function OpenBurger() {
  let btns = document.querySelectorAll(".burger_btn");
  let menu = document.getElementById("burger");
  btns.forEach((e) => {
    e.onclick = () => {
      menu.classList.toggle("active");
      btns.forEach((b) => {
        b.classList.toggle("active");
      });
    };
  });
}

// Select all slides
const slidesArr = document.getElementsByClassName("slide");
let slides = Array.from(slidesArr);

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;

let maxSlide = slides.length - 1;
// select next slide button
document.querySelector(".intro__slider_btn_next").onclick = () => {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};

document.querySelector(".intro__slider_btn_prev").onclick = () => {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};

OpenTab();
function OpenTab() {
  let buttons = document.getElementsByClassName(`tab__button`);
  let tabs = document.getElementsByClassName(`tab`);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      for (let j = 0; j < buttons.length; j++) {
        if (j != i) {
          buttons[j].classList.remove("active");
          tabs[j].classList.remove("active");
        }
        buttons[i].classList.add("active");
        tabs[i].classList.add("active");
      }
    };
  }
}
