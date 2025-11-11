let slideIndex = 0;
let slideTimer = null;

function showSlides(index = null) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // If a specific index is passed (manual navigation), use it
  if (index !== null) {
    slideIndex = index;
  } else {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  }

  // Hide all slides and deactivate all dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Show current slide and activate corresponding dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  // Restart timer
  slideTimer = setTimeout(() => showSlides(), 4000);
}

// Manual navigation
function currentSlide(n) {
  clearTimeout(slideTimer);       // Stop auto cycle
  showSlides(n - 1);              // Show selected slide
}

// Start slideshow on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlides(0); // Start from first slide
});