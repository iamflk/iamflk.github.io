// SCROLL NAV
window.addEventListener('scroll', function(){
    let navigation = document.querySelector('nav');
    document.querySelector('.navigation__items a');
    navigation.classList.toggle('navigation__scroll', window.scrollY > 0);
  });
  
  // SCROLL LINK NAV
  
  document.querySelector('#link-home').addEventListener('click', () =>{
    document.querySelector('html, body').scrollIntoView({ behavior: 'smooth'});
  })

  const links = document.querySelectorAll(".navigation__items a");
  const arrowAbout = document.querySelector('#arrow-about');
  const arrowSkill = document.querySelector('#arrow-skill');
  const arrowProject = document.querySelector('#arrow-project');
  const arrowContact = document.querySelector('#arrow-contact');
  const seeProject = document.querySelector('#see-project');

for (const link of links) {
  link.addEventListener("click", clickHandler);
  arrowAbout.addEventListener("click", clickHandler);
  arrowSkill.addEventListener("click", clickHandler);
  arrowProject.addEventListener("click", clickHandler);
  arrowContact.addEventListener("click", clickHandler);
  seeProject.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

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