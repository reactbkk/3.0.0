import { css } from 'emotion'
import { PARTICLES } from '../design'

const transform = (x, y, rot) =>
  `translateX(-50%) translateY(-50%) translateZ(0) translateX(${x}px) translateY(${y}px) rotate(${rot}rad)`

const sparkleStyle = css({
  position: 'fixed',
  background: 'center no-repeat',
  backgroundSize: 'contain',
  width: 16,
  height: 16,
  transform: transform(0, 0),
  transition: '0.3s transform linear, 0.3s opacity linear',
  pointerEvents: 'none',
  mixBlendMode: 'lighten',
})

/**
 * @param {number} x
 * @param {number} y
 */
function show (x, y) {
  requestAnimationFrame(() => {
    const phaseShift = Math.random() * Math.PI * 2
    const count = Math.round(Math.random() * 3 + 5)
    for (let i = 0; i < count; i++) {
      const rotation = Math.random() * Math.PI * 2
      const image = PARTICLES[Math.floor(Math.random() * PARTICLES.length)]
      const el = document.createElement('div')
      el.className = sparkleStyle
      el.style.left = `${x}px`
      el.style.top = `${y}px`
      el.style.backgroundImage = `url(${image})`
      document.body.appendChild(el)
      const theta = (i / count) * Math.PI * 2 + phaseShift
      const r = Math.random() * 200 + 50
      const tX = Math.cos(theta) * r
      const tY = Math.sin(theta) * r
      el.style.opacity = Math.random() * 0.5 + 0.5
      el.style.transform = transform(tX * 0.1, tY * 0.1, rotation)
      requestAnimationFrame(() => {
        el.style.transform = transform(tX, tY, rotation)
        el.style.opacity = 0
        setTimeout(() => {
          document.body.removeChild(el)
        }, 500)
      })
    }
  })
}

/**
 * @param {HTMLElement} element
 */
export function showSparklesEffectOnElement (element) {
  const rect = element.getBoundingClientRect()
  show(rect.left + rect.width / 2, rect.top + rect.height / 2)
}
