const PIXELS_TO_MOVE = 1000
document.querySelector('#startAnimation').addEventListener('click', () => {
    setTimeoutAnimation()
    requestAnimationFrameAnimation()
})

function setTimeoutAnimation() {
    const box = document.querySelector('#setTimeout')
    console.log('Animate setTimeout Box')

    let translateX = 0
    
    function animate() {
        console.log(`Translate setTimeout Box to ${translateX}`)
        box.style.transform = `translateX(${translateX}px)`
        translateX++
        if (translateX < PIXELS_TO_MOVE) {
            setTimeout(animate, 0)
        }
    }
    
    animate()
}

function requestAnimationFrameAnimation() {
    const box = document.querySelector('#requestAnimationFrame')
    console.log('Animate requestAnimationFrame Box')

    let translateX = 0

    function animate(time) {
        console.log(`Translate requestAnimationFrame Box to ${translateX} at ${time}`)
        box.style.transform = `translateX(${translateX}px)`
        translateX++
        if (translateX < PIXELS_TO_MOVE) {
            requestAnimationFrame(animate)
        }
    }

    requestAnimationFrame(animate)
}

let count = 0
let last = -1
function logSetTimeout() {
    const now = new Date().getTime()
    if (last > -1) {
        console.log(`setTimeout callback ${count} at ${now - last} ms later`)
    }
    count++
    last = now

    if (count < 100) {
        setTimeout(logSetTimeout, 0)
    }
}

function logRequestAnimationFrame(time) {
    if (last > -1) {
        console.log(`requestAnimationFrame callback ${count} at ${time - last} ms later`)
    }
    count++
    last = time

    if (count < 100) {
        requestAnimationFrame(logRequestAnimationFrame)
    }
}

function reset() {
    last = -1
    count = 0
}