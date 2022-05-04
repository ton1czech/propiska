document.querySelector('.year').innerHTML = new Date().getFullYear()

// gsap
var tl = gsap.timeline({ defaults: { duration: 1 } })
tl.from('#logo', { scale: 10, x: 500, y: 400, duration: 2 }, '+=1')
  .from('#intxt1', { x: -300, opacity: 0 }, '-=1.2')
  .from('#intxt2', { x: -300, opacity: 0 }, '-=1')
  .from('#intxt3', { x: -300, opacity: 0 }, '-=0.8')
  .from('#intxt4', { x: 300, opacity: 0 }, '-=0.3')
  .from('#navbar', { y: 100, opacity: 0 })
  .from('#intxt5', { y: 50, opacity: 0 }, '-=0.3')

// scrollreveal
ScrollReveal({ opacity: 0, distance: '25%', delay: 600, origin: 'left' })

ScrollReveal().reveal('#abt1', { origin: 'top', delay: 1000 })
ScrollReveal().reveal('#abt2')
ScrollReveal().reveal('#abt3')
ScrollReveal().reveal('#abt4')
ScrollReveal().reveal('#abt5')
ScrollReveal().reveal('#abt6')

ScrollReveal().reveal('#abt7', { origin: 'top', delay: 1000 })
ScrollReveal().reveal('#abt8')

ScrollReveal().reveal('#buy1', { origin: 'top', delay: 1000 })
ScrollReveal().reveal('#buy2', { origin: 'bottom' })

ScrollReveal().reveal('#ftr1', { origin: 'right', delay: 1000 })
