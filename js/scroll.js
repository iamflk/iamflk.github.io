// SCROLL NAV
window.addEventListener('scroll', function(){
    let navigation = document.querySelector('nav');
    document.querySelector('.navigation__items a');
    navigation.classList.toggle('navigation__scroll', window.scrollY > 0);
  });
  
  // SCROLL LINK NAV
  
  
  $("#link-home").click(function () {
    $("html, body").animate({
      scrollTop: $(".home").offset().top
    }, 1000);
  });
  
  document.querySelector('#link-home').addEventListener('click', () =>{
    document.querySelector('html, body').classList.add('animate')
  })
  
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
        scrollTop: $("footer").offset().top
      }, 1000);
    });
    $("#arrow").click(function () {
      $("html, body").animate({
        scrollTop: $("section.about").offset().top
      }, 1000);
    });
    $("#see-project").click(function () {
      $("html, body").animate({
        scrollTop: $("section.project").offset().top
      }, 1000);
    });

    // BUTTON SCROLL TOP
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