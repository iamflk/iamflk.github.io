window.addEventListener('scroll', function(){
  let navigation = document.querySelector('nav');
  let link = document.querySelector('.navigation__items a');
  // link.classList.remove('bord');
  navigation.classList.toggle('navigation__scroll', window.scrollY > 0);
});



//LINK NAV SCROLL

  $("#link-home").click(function () {
    $("html, body").animate({
      scrollTop: $(".navigation").offset().top
    }, 1000);
  });

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

  
// BUTTON SCROLL
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

//BUTTON SCROLL BOTTOM
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


//section navigation
// sr.reveal('.navigation', {
//   delay: 500
// });

// section hero

// sr.reveal('.hero-text h1', {
//   delay: 1000
// });
// sr.reveal('.hero-text h2', {
//   delay: 1500
// });
// sr.reveal('.icon-arrow', {
//   delay: 2000
// });
// sr.reveal('.arrow', {
//   delay: 500
// });

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

sr.reveal('.contact-header-title h3', {
  delay: 500
});
sr.reveal('.contact-header-intro p', 1000);
sr.reveal('.contact-button a', 1500);
sr.reveal('.contact-illustration', 2000)
sr.reveal('.contact-box', 2500);


var options = {
  strings: ["👻"],
  typeSpeed: 100,
  backDelay: 5000,
  backSpeed: 120,
  loop: true
};
var Typed = new Typed("#row", options);



// let skillBox = document.querySelector('.skill__content--box');
// let skillStack = document.querySelector('p');

// skillStack.addEventListener('click', () => {
//   skillBox.style.backgroundColor = "green";
// });
