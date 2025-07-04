fetch("header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;

        // Attach search logic after header is loaded
        const searchBox = document.getElementById("searchInput");
        if (searchBox) {
          searchBox.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
              e.preventDefault();
              const query = searchBox.value.trim();
              if (query) {
                alert("You searched for: " + query);
              }
            }
          });
        }
      });