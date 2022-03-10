document.querySelector('#webAnim1')
        .addEventListener('click', () => {
    const animation = [
        { width: '150px', height: '150px', },
        { width: '300px', height: '150px', },
        { width: '300px', height: '300px', },
    ]
    const timing = {
        duration: 2000,
        fill: 'both',
    }
    
    const box = document.querySelector('.box')
    box.animate(animation, timing)
})












let toggleAnim
document.querySelector('#webAnim2')
        .addEventListener('click', () => {
    if (!toggleAnim) {
        const keyFrames = [
            { width: '150px', height: '150px', },
            { width: '300px', height: '150px', },
            { width: '300px', height: '300px', },
        ]
        const timing = {
            duration: 2000,
            fill: 'both',
        }
        
        const box = document.querySelector('.box')
        toggleAnim = box.animate(keyFrames, timing)    
    } else {
        toggleAnim.reverse()
    }    
})