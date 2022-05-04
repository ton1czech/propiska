document.querySelector('.year').innerHTML = new Date().getFullYear()

// gsap
var tl = gsap.timeline({ defaults: { duration: 1.3 } })
tl.from('#logo', { scale: 10, x: 500, y: 400, duration: 2.5 }, '+=1')
  .from('#intxt1', { x: -300, opacity: 0 }, '-=1.2')
  .from('#intxt2', { x: -300, opacity: 0 }, '-=1')
  .from('#intxt3', { x: -300, opacity: 0 }, '-=1')
  .from('#intxt4', { x: 300, opacity: 0 }, '-=0.3')
  .from('#navbar', { y: 100, opacity: 0 })
  .from('#intxt5', { y: 50, opacity: 0 }, '-=0.3')

// scrollreveal
ScrollReveal({ opacity: 0, distance: '25%', delay: 500, origin: 'left' })

ScrollReveal().reveal('#abt1', { origin: 'top' })
ScrollReveal().reveal('#abt2', { delay: 1000 })
ScrollReveal().reveal('#abt3', { delay: 1300 })
ScrollReveal().reveal('#abt4', { delay: 1700 })
ScrollReveal().reveal('#abt5', { delay: 2000 })
ScrollReveal().reveal('#abt6', { delay: 2300 })
