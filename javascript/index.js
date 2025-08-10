 const scrollArrow = document.getElementById("scrollArrow");
    const contactSection = document.getElementById("contact");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollArrow.href = "#home";
            scrollArrow.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
          } else {
            scrollArrow.href = "#contact";
            scrollArrow.innerHTML = '<i class="bi bi-arrow-down-short"></i>';
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(contactSection);


    


    const images = [
  "images/image1.jpg",
  "images/image.png",
  "images/a.png"
];

let currentIndex = 0;
const bgElement = document.querySelector('.hero-coder .bg');

function changeBackground() {
  bgElement.style.opacity = 0; // fade out

  setTimeout(() => {
    bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
    bgElement.style.opacity = 1; // fade in
  }, 2000); // fade-out duration
}

// First image
bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
currentIndex++;

// Change every 8 seconds → 2s fade out + 4s stay + 2s fade in
setInterval(changeBackground, 8000);
