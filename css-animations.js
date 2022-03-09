const box = document.querySelector('.box')

function setBoxStyles(styles) {
  const existing = box.classList.entries()
  box.classList.remove(...existing)
  box.classList.add(...styles)
}

document.querySelector('#onceSimple').addEventListener('click', () => {
  setBoxStyles(['box', 'growOnce'])
})

document.querySelector('#pulseSimple').addEventListener('click', () => {
  setBoxStyles(['box', 'pulse'])
})

document.querySelector('#twoStep').addEventListener('click', () => {
  setBoxStyles(['box', 'twoStep'])
})

let expanded = false
document.querySelector('#toggleTwoStep').addEventListener('click', () => {
  setBoxStyles(['box'])
  box.style.animation = null
  if (expanded) {
    box.style.animationDirection = 'reverse'
  } else {
    box.style.animationDirection = 'normal'
  }
  box.offsetWidth
  box.style.animationName = 'twoStep'
  box.style.animationDuration = '500ms'
  box.style.animationFillMode = 'both'
  box.style.animationIterationCount = 'unset'
  expanded = !expanded
})

document.querySelector('#clear').addEventListener('click', () => {
  box.style.animation = null
  box.classList = 'box'
})

