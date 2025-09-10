    function toggleMenu(btn) {
      const menu = document.getElementById("menu");
      const isOpen = menu.classList.toggle("active");
      // swap icon + ARIA state
      btn.innerHTML = isOpen ? "乂" : "☰";
      btn.setAttribute("aria-expanded", String(isOpen));
    }
    // optional: close menu when clicking outside
    document.addEventListener("click", (e) => {
      const toggle = document.getElementById("menuToggleBtn");
      const menu = document.getElementById("menu");
      if (!toggle || !menu) return;
      const clickedOutside = !toggle.contains(e.target) && !menu.contains(e.target);
      if (clickedOutside && menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.innerHTML = "☰";
        toggle.setAttribute("aria-expanded", "false");
      }
    });