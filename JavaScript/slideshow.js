let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
