
const $ = window.jQuery;
$(".card").tilt({
  maxTilt: 15,
  perspective: 1500,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  speed: 500,
  glare: false,
  maxGlare: 0.2,
  scale: 1.01
});