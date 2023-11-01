const slides = document.getElementById('container-slides')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const menu = document.getElementById('menu')
const nav = document.querySelector('nav')
const img = document.getElementById('header-icon')
const logoMenu = document.getElementById('logo-menu')
const li = nav.querySelectorAll('li')
const card = document.getElementsByClassName('card')
const width = window.innerWidth
const height = window.innerHeight

let values = []
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

function handleCard(e){
    let me = e.target
    if (me.classList[0] !== 'card') me = me.parentNode
    if (me.classList[0] !== 'card') me = me.parentNode
    if (me.classList[0] !== 'card') me = me.parentNode
    let desc = me.children[1]
    if (!values[me.id]) {
        desc.hidden = values[me.id]
        values[me.id] = !values[me.id]
        desc.scrollIntoView({block: 'center'})
        return
    }
    desc.scrollIntoView({block: 'center'})
    desc.hidden = values[me.id]
    values[me.id] = !values[me.id]
}

menu.addEventListener("click", handleMenu)

window.addEventListener('load', () => {
    for(let i in li){
        if (typeof li[i] == 'object')
        li[i].addEventListener('click', handleMenu)
    }

    for(let i in card){
        if (typeof card[i] == 'object') {
            card[i].addEventListener('click', handleCard)
            card[i].id = i
            values.push(false)
        }
    }
})

for(let i = 0; i < slides.children.length; i++){
    dist.push((width+32)*i)
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