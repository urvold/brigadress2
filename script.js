
// burger menu
const burger=document.querySelector('.burger'); const nav=document.querySelector('.nav');
if(burger&&nav){ burger.addEventListener('click',()=>{ nav.style.display=(nav.style.display==='flex'?'none':'flex'); if(nav.style.display==='flex'){nav.style.flexDirection='column'} }); }
// accordion
document.querySelectorAll('.feature').forEach(f=>{ const h=f.querySelector('.feature-head'); h.addEventListener('click',()=>f.classList.toggle('open')); });
// carousel
const car=document.getElementById('partners-carousel'); if(car){ const track=car.querySelector('.car-track'); car.querySelector('.prev').addEventListener('click',()=>track.scrollBy({left:-400,behavior:'smooth'})); car.querySelector('.next').addEventListener('click',()=>track.scrollBy({left:400,behavior:'smooth'})); }
// year
const y=document.getElementById('year'); if(y){ y.textContent=(new Date()).getFullYear(); }
// modals
document.querySelectorAll('[data-open]').forEach(btn=>{ btn.addEventListener('click',e=>{ e.preventDefault(); const id=btn.getAttribute('data-open'); const m=document.getElementById(id); if(m){ m.setAttribute('aria-hidden','false'); } }); });
document.querySelectorAll('[data-close]').forEach(btn=>{ btn.addEventListener('click',()=>{ const id=btn.getAttribute('data-close'); const m=document.getElementById(id); if(m){ m.setAttribute('aria-hidden','true'); } }); });
