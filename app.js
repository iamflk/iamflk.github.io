// var t1 = new TimelineMax({
//   paused: true
// });

// t1.to(".one", 0.8, {
//   y: 6,
//   rotation: 45,
//   ease: Expo.easeInOut
// });
// t1.to(".two", 0.8, {
//   y: -6,
//   rotation: -45,
//   ease: Expo.easeInOut,
//   delay: -0.8
// });

// t1.to(".menu", 2, {
//   top: "0%",
//   ease: Expo.easeInOut,
//   delay: -2
// });

// t1.staggerFrom(".menu ul li", 2, {
//   x: -200,
//   opacity: 0,
//   ease: Expo.easeOut
// }, 0.3);

// t1.reverse();
// $(document).on("click", ".toggle-btn", function () {
//   t1.reversed(!t1.reversed());
//   document.getElementById('hero-text').classList.add('is-visible');
//   document.getElementById('icon-arrow').classList.add('is-visible');
// });

// $(document).on("click", "a", function () {
//   t1.reversed(!t1.reversed());
// });


// $(function () {
//   $("#logo-home").click(function () {
//     $("html, body").animate({
//       scrollTop: $("section.home").offset().top
//     }, 1000);
//   });

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
  $("#icon-arrow").click(function () {
    $("html, body").animate({
      scrollTop: $("section.about").offset().top
    }, 1000);
  });
  $("#see-project").click(function () {
    $("html, body").animate({
      scrollTop: $("section.project").offset().top
    }, 1000);
  });



const backToTopButton = document.querySelector("#btn-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 700) {
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

var sr = ScrollReveal({
  duration: 1500,
  reset: false
});


// section hero

sr.reveal('.hero-text h1', {
  delay: 500
});
sr.reveal('.hero-text h2', {
  delay: 1000
});
sr.reveal('.hero-text img', {
  delay: 1500
});

// section about

sr.reveal('.about-content', {
  delay: 500
});
sr.reveal('.about-illustration img', 2000);
sr.reveal('.intro-feature', 500);

//section skill
sr.reveal('.skill-illustration img', 500);
sr.reveal('.skill-front', {
  delay: 1500,
  origin: 'left',
  distance: '50px'
});
sr.reveal('.skill-back', {
  delay: 2000,
  origin: 'right',
  distance: '50px'
});
sr.reveal('.skill-framework', {
  delay: 2500,
  origin: 'left',
  distance: '50px'
});
sr.reveal('.skill-tool', {
  delay: 3000,
  origin: 'right',
  distance: '50px'
});


// section project
sr.reveal('.project-portfolio', {
  delay: 500,
  origin: 'top',
  distance: '50px',
  easing: 'ease-in'
});

// section contact

sr.reveal('.contact-header-title h3', {
  delay: 500
});
sr.reveal('.contact-header-intro p', 1000);
sr.reveal('.contact-button a', 1500);
sr.reveal('.contact-illustration', 2000)
sr.reveal('.contact-box', 2500);


var options = {
  strings: ["web"],
  typeSpeed: 100,
  backDelay: 5000,
  backSpeed: 120,
  loop: true
};
var Typed = new Typed("#row", options);