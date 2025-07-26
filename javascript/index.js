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