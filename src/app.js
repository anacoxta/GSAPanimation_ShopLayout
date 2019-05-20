const navBtn = document.querySelector('.nav-btn')
const navOpen = document.querySelector('.nav-opened')

const tl = new TimelineLite({paused: true, reversed: true})

tl.to('nav', 1, { height: '100%', ease: Power2.easeOut })
  .to('.cover', 1, { width: '60%', ease: Power2.easeOut }, '-=0.9')
  .fromTo(
    '.nav-opened',
    0.5,
    { opacity: 0, x: 50, ease: Power2.easeOut },
    {
      opacity: 1,
      x: 0,
      onComplete: function() {
        navOpen.style.pointerEvents = 'auto'
      },
    }
  )

navBtn.addEventListener('click', (e) => {
  if (tl.isActive()) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return false
  }
  toggleTL(tl)
})

function toggleTL(tween) {
  tween.reversed() ? tween.play() : tween.reverse() 
}