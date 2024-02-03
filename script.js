var t1 = gsap.timeline();
t1.from("#page1 #nav h4", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.3,
});

t1.from("#page1 #nav #nav2 ", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
});

t1.from("#page1 #nav #nav3 .form", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
});

t1.from("#page1 #nav #nav3 button", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
});

t1.from("#page1 #content h1", {
  x: -500,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.4,
});

t1.from("#page1 #content img", {
  x: 100,
  opacity: 0,
  rotate: 45,
  delay: 0.8,
  duration: 0.5,
  stagger: 0.6,
});
