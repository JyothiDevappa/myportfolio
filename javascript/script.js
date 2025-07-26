
      // 1️⃣ Close on nav link click

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    function closeNavbar() {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    }
    navLinks.forEach(function (link) {
      link.addEventListener("click", closeNavbar);
    });

    //  Close on click outside navbar
    document.addEventListener("click", function (event) {
      const isClickInside = navbarCollapse.contains(event.target) || event.target.classList.contains("navbar-toggler");
      if (!isClickInside) {
        closeNavbar();
      }
    });

    //  Close on scroll
    window.addEventListener("scroll", closeNavbar);
  });



// scrollArrow for project.html
    const scrollArrow = document.getElementById("scrollArrow");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollArrow.href = "#projects";
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