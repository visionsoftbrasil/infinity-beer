const slides = document.getElementById('container-slides')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const menu = document.getElementById('menu')
const nav = document.querySelector('nav')
const img = document.getElementById('header-icon')
const logoMenu = document.getElementById('logo-menu')
const xMenu = document.getElementById('x-menu')

let menuOpen = false

let dist = []
let counter = 0

function handleMenu() {
    if (!menuOpen) {
        nav.classList.add('more-width')
        img.src = "./assets/icons/x.svg"
    }else {
        nav.classList.remove('more-width')
        img.src = "./assets/icons/menu.svg"
    }
    menuOpen = !menuOpen
}

menu.addEventListener("click", handleMenu)
xMenu.addEventListener('click', handleMenu)

for(let i = 0; i < slides.children.length; i++){
    dist.push(464*i)
}

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