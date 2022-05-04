document.querySelector('.year').innerHTML = new Date().getFullYear()

var tl = gsap.timeline({ defaults: { duration: 1.3 } })
tl.from('#logo', { scale: 10, x: 500, y: 400, duration: 2.5 }, '+=1')
  .from('#intxt1', { x: -300, opacity: 0 }, '-=1.2')
  .from('#intxt2', { x: -300, opacity: 0 }, '-=1')
  .from('#intxt3', { x: -300, opacity: 0 }, '-=1')
  .from('#intxt4', { x: 300, opacity: 0 }, '-=0.3')
  .from('#navbar', { y: 100, opacity: 0 })
  .from('#intxt5', { y: 50, opacity: 0 }, '-=0.3')
