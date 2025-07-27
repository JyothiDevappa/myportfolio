
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

  });



