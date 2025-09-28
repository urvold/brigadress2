// Mobile menu (simple)
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
if(burger && nav){
  burger.addEventListener('click', ()=>{
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'
  })
}

// Smooth scroll to form
document.querySelectorAll('.scroll-to-form, .cta-fixed').forEach(el=>{
  el.addEventListener('click', (e)=>{
    // allow anchor default but smooth it
    // prevent default to handle offset if needed
  })
})

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

// Form optional client-side validation + mailto fallback on error
const form = document.getElementById('lead')
if(form){
  form.addEventListener('submit', (e)=>{
    // Let formsubmit.co handle by default; keep minimal JS to avoid blocking
  })
}
