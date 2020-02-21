// Your code here
const dodger = document.querySelector('#dodger')
document.addEventListener('keydown', function (event) {
    switch(true) {
        case event.key === 'ArrowLeft':
            moveDodgerLeft()
            break
        case event.key === 'ArrowRight':
            moveDodgerRight()
            break
    }
})

let currentPos = parseInt(dodger.style.left)

const moveDodgerLeft = () => {
   currentPos -= 1
   dodger.style.left = `${currentPos}px`
}

const moveDodgerRight = () => {
   currentPos += 1
   dodger.style.left = `${currentPos}px`
}
