{/* <script> */}
// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', function handleClick(e)
    {
        e.preventDefault();
        this.textContent = this.textContent == 'See more' ? 'See less' : 'See more';
    });
  })

  // Image slideshow for the header
  let currentSlide = 0;
  const images = ["./WhatsApp Image 2024-01-04 at 7.59.49 PM.jpeg", './londoneye.jpeg', './hotupbus.jpeg'];

  function showSlide() {
    document.getElementById('header-image').src = images[currentSlide];
    currentSlide = (currentSlide + 1) % images.length;
  }

  setInterval(showSlide, 3000); // Change image every 3 seconds
});