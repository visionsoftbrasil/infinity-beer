const slides = document.getElementById('container-slides')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let dist = []
let counter = 0

for(let i = 0; i < slides.children.length; i++){
    dist.push(464*i)
}

console.log(dist)


next.addEventListener('click', () => {
    counter += 1
    if (counter >= slides.children.length) {
        slides.style.transform = `translateX(${dist[0]}px)`
        counter = 0
        return
    }
    slides.style.transform = `translateX(-${dist[counter]}px)`
})

prev.addEventListener('click', () => {
    if (counter == 0) {
        slides.style.transform = `translateX(-${dist[dist.length-1]}px)`
        counter = dist.length-1
        return
    }
    counter -= 1
    console.log(dist, counter)
    slides.style.transform = `translateX(-${dist[counter]}px)`
    console.log(dist, counter)
})