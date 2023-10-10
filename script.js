const slides = document.getElementById('container-slides')
const button = document.getElementById('next')
let dist = 464
let counter = 1

button.addEventListener('click', () => {

    if (counter >= slides.children.length) {
        slides.style.transform = `translateX(0px)`
        dist = 464
        counter = 1
        return
    }

    slides.style.transform = `translateX(-${dist}px)`
    dist+=464
    counter += 1
})