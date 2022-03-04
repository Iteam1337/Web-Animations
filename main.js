import './style.css'

const box = document.querySelector('.box')

document.querySelector('#onceSimple').addEventListener('click', () => {
  box.style.animationName = 'none'
  box.offsetWidth
  box.style.animationName = 'growSimple'
  box.style.animationDuration = '1s'
  box.style.animationFillMode = 'both'
  box.style.animationIterationCount = 'unset'
})

document.querySelector('#onceTwoStep').addEventListener('click', () => {
  box.style.animationName = 'none'
  box.offsetWidth
  box.style.animationName = 'twoStep'
  box.style.animationDuration = '5s'
  box.style.animationFillMode = 'both'
  box.style.animationIterationCount = 'unset'
})

document.querySelector('#pulseSimple').addEventListener('click', () => {
  box.style.animationName = 'none'
  box.offsetWidth
  box.style.animationName = 'growSimple'
  box.style.animationDuration = '1s'
  box.style.animationFillMode = 'both'
  box.style.animationIterationCount = 'infinite'
})

let expanded = false
document.querySelector('#toggleSimple').addEventListener('click', () => {
  if (expanded) {
    box.style.animationDirection = 'reverse'
  } else {
    box.style.animationDirection = 'normal'
  }
  box.style.animationName = 'none'
  box.offsetWidth
  box.style.animationName = 'growSimple'
  box.style.animationDuration = '1s'
  box.style.animationFillMode = 'both'
  box.style.animationIterationCount = 'unset'
  expanded = !expanded
})
