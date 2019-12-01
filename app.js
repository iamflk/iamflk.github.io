$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("color");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('color');
  }

  else {
        $('nav').removeClass('color');
  }
})


$(function () {
  $("#link-about").click(function () {
    $("html, body").animate({
      scrollTop: $("section.about").offset().top
    }, 1000);
  });
  $("#link-skill").click(function () {
    $("html, body").animate({
      scrollTop: $("section.skill").offset().top
    }, 1000);
  });
  $("#link-project").click(function () {
    $("html, body").animate({
      scrollTop: $("section.project").offset().top
    }, 1000);
  });
  $("#link-contact").click(function () {
    $("html, body").animate({
      scrollTop: $("section.contact").offset().top
    }, 1000);
  });

});

const backToTopButton = document.querySelector("#btn-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

var options = {
  strings: ["web"],
  typeSpeed: 100,
  backDelay: 5000,
  backSpeed: 120,
  loop: true
};
var Typed = new Typed("#row", options);