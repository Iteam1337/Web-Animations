export function animateByErik(update, duration, interpolationFunction) {
    let last = -1

    function animate(time) {        
        if (last === -1) last = time // First frame!
        
        const diff = Math.max(time - last, 0) // Make sure we don't get negative diff
        let fraction = Math.min(diff / duration, 1.0) // Make sure we don't go above 1.0
        
        if (interpolationFunction) {
            fraction = interpolationFunction(fraction) // Interpolate the fraction
        }
        
        console.log(`Diff ${diff}, Fraction ${fraction}`)

        update(fraction) // Do the animation

        if (fraction < 1.0) {
            requestAnimationFrame(animate) // Next frame
        } else {
            console.log(`Animation completed at ${fraction}: ${diff} > ${duration}`)
        }
    }

    animate(performance.now())
}
