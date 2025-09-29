// Mobile menu toggle
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
if(burger && nav){
  burger.addEventListener('click', ()=>{
    nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex')
    if(nav.style.display === 'flex'){ nav.style.flexDirection='column' }
  })
}

// Accordion behavior
document.querySelectorAll('.feature').forEach(f=>{
  const head = f.querySelector('.feature-head')
  head.addEventListener('click', ()=>{
    f.classList.toggle('open')
  })
})

// Carousel buttons
const car = document.getElementById('partners-carousel')
if(car){
  const track = car.querySelector('.car-track')
  car.querySelector('.prev').addEventListener('click', ()=> track.scrollBy({left:-400, behavior:'smooth'}))
  car.querySelector('.next').addEventListener('click', ()=> track.scrollBy({left: 400, behavior:'smooth'}))
}
