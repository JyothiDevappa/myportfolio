
 
 const scrollArrow = document.getElementById("scrollArrow");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Contact section is visible: show up arrow
            scrollArrow.href = "#about";
            scrollArrow.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
          } else {
            // Contact section not in view: show down arrow
            scrollArrow.href = "#contact";
            scrollArrow.innerHTML = '<i class="bi bi-arrow-down-short"></i>';
          }
        });
      },
      {
        threshold: 0.5, // 50% of contact section in view
      }
    );

    observer.observe(contactSection);

  // progress bar  

    window.addEventListener("load", function () {
      const bars = document.querySelectorAll(".progress-bar");
      bars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      });
    });