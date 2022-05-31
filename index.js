let slides = document.querySelectorAll(".slide");
let cards = document.querySelectorAll(".row-card");
console.log(cards);

slideIndex = 0;

// slideShow();

function slideShow() {
  let i;

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

  slideIndex++;

  if (slideIndex > slides.length) slideIndex = 1;

  for (i = 0; i < cards.length; i++) cards[i].style.display = "none";

  slides[slideIndex - 1].style.display = "block";
  cards[slideIndex - 1].style.display = "flex";
}

setInterval(slideShow, 7000);
