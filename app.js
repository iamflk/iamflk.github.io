var sr = ScrollReveal({
  duration: 1000,
  reset: true,
  mobile: false,
  useDelay: 'once'
});

// section home
sr.reveal('.logo img');

sr.reveal('.hero-content p', {delay: 500});
sr.reveal('.hero-content a', {delay: 1000});
sr.reveal('.hero-img', {delay: 1500});

// section intro

sr.reveal('.intro-feature', 500);

//section sign-up

sr.reveal('.sign-up h3');
sr.reveal('.sign-up .name', {delay: 500, origin: 'right', distance: '50px'});
sr.reveal('.sign-up .password', {delay: 1000, origin: 'left', distance: '50px'});
sr.reveal('.sign-up button', {delay: 1500});


var options = {
  strings: ["web"],
  typeSpeed: 100,
  backDelay: 5000,
  backSpeed: 120,
  loop: true
};
var Typed = new Typed("#row", options);

