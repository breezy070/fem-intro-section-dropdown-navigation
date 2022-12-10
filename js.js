

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

(function mainScript() {
    "use strict";
  
    const offcanvasToggle = document.querySelector(
      '[data-bs-toggle="offcanvas"]',
    );
    const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
  
    offcanvasToggle.addEventListener("click", function () {
      offcanvasCollapse.classList.toggle("open");
    });
  })();