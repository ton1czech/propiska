document.querySelector('.year').innerHTML = new Date().getFullYear()

const mobile = window.innerWidth <= 666

var tl = gsap.timeline({ defaults: { duration: 1 } })
tl.from(
  '#logo',
  {
    scale: mobile ? 3 : 10,
    x: mobile ? window.innerWidth / 2 - 70 : 500,
    y: mobile ? 300 : 400,
    duration: 2,
  },
  '+=0.75'
)
  .from('#int1', { x: -300, opacity: 0 }, '-=1.2')
  .from('#int2', { x: -300, opacity: 0 }, '-=1')
  .from('#int3', { x: -300, opacity: 0 }, '-=0.8')
  .to(
    '#int4',
    {
      duration: 1.7,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease: 'expo.out',
    },
    '-=0.7'
  )
  .from('#navbar', { y: 100, opacity: 0 })
  .from('#int5', { y: 50, opacity: 0 }, '-=0.3')

ScrollReveal({ opacity: 0, distance: '25%', delay: 750, origin: 'left' })

ScrollReveal().reveal('#abt1', { origin: 'top' })
ScrollReveal().reveal('#abt2')
ScrollReveal().reveal('#abt3')
ScrollReveal().reveal('#abt4')
ScrollReveal().reveal('#abt5', { origin: 'top' })
ScrollReveal().reveal('#abt6')

ScrollReveal().reveal('#buy1', { origin: 'top' })
ScrollReveal().reveal('#buy2', { origin: 'bottom' })

ScrollReveal().reveal('#ftr1', { origin: 'top' })
ScrollReveal().reveal('#ftr2', { origin: 'bottom' })
