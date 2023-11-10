const slides = document.getElementById('container-slides')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const menu = document.getElementById('menu')
const nav = document.querySelector('nav')
const img = document.getElementById('header-icon')
const imgEvent = slides?.querySelectorAll('img')
const logoMenu = document.getElementById('logo-menu')
const li = nav.querySelectorAll('li')
const card = document.getElementsByClassName('card')
const ev = document.getElementById('eventos')
const drinks = document.getElementById('drinks')
const header = document.querySelector('header')
const width = window.innerWidth
const height = window.innerHeight

let values = []
let menuOpen = false

let dist = []
let counter = 0

let auto = true

const interval = setInterval(() => {
    if (auto) nextSlide() 
    else return
}, 3000)

ev.style.height = header.offsetHeight*1.5+'px'
drinks.style.height = header.offsetHeight*1.5+'px'

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

    for(let i = 0; i < slides.children.length; i++){
        dist.push((imgEvent[0].offsetWidth+64)*i)
    }
})

next.addEventListener('click', () => {
    nextSlide()
    auto = false
    setTimeout(() => {
        if (auto) {
            return
        }else auto = true
    }, 5000)
})

prev.addEventListener('click', () => {
    prevSlide()
    auto = false
    setTimeout(() => {
        if (auto) {
            return
        }else auto = true
    }, 5000)
})

function nextSlide(){
    counter += 1
    if (counter >= slides.children.length) {
        slides.style.transform = `translateX(${dist[0]}px)`
        counter = 0
        return
    }
    slides.style.transform = `translateX(-${dist[counter]}px)`
}

function prevSlide(){
    if (counter == 0) {
        slides.style.transform = `translateX(-${dist[dist.length-1]}px)`
        counter = dist.length-1
        return
    }
    counter -= 1
    slides.style.transform = `translateX(-${dist[counter]}px)`
}
