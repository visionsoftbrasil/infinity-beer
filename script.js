const slides = document.getElementById('container-slides')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let dist = -464
let counter = 1

next.addEventListener('click', () => {
    console.log("PREV NEXT:", dist)
    if (counter >= slides.children.length) {
        slides.style.transform = `translateX(0px)`
        dist = -464
        counter = 1
        console.log("FINAL NEXT:", dist)
        return
    }

    slides.style.transform = `translateX(${dist}px)`
    dist-=464
    counter += 1
    console.log("FINAL NEXT:", dist)
})

prev.addEventListener('click', () => {
    console.log("PREV PREV:", dist)
    if (counter == 1) {
        dist*=3
        slides.style.transform = `translateX(${dist}px)`
        counter = 4
        console.log("FINAL PREV:", dist)
        return
    }
    dist+=464
    slides.style.transform = `translateX(${dist}px)`
    counter -= 1
    console.log("FINAL PREV:", dist)
})