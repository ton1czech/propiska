document.querySelector('.year').innerHTML = new Date().getFullYear()

var tl = gsap.timeline({ defaults: { duration: 1.5 } })
tl.from('#intxt1', { x: -500, opacity: 0 })
  .from('#intxt2', { x: -500, opacity: 0 }, '-=1')
  .from('#intxt3', { x: -500, opacity: 0 }, '-=1')
  .from('#intxt4', { x: 500, opacity: 0 }, '-=0.3')
  .from('#intxt5', { y: 50, opacity: 0 }, '-=0.3')
