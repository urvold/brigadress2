
document.addEventListener('DOMContentLoaded', ()=>{
  // burger
  const burger=document.querySelector('.burger'); const nav=document.querySelector('.nav');
  if(burger&&nav){ burger.addEventListener('click',()=>{ nav.style.display=(nav.style.display==='flex'?'none':'flex'); if(nav.style.display==='flex'){nav.style.flexDirection='column'} }); }

  // accordion
  document.querySelectorAll('.feature').forEach(f=>{
    const h=f.querySelector('.feature-head');
    h.addEventListener('click',()=> f.classList.toggle('open'));
  });

  // carousel
  const car=document.getElementById('partners-carousel');
  if(car){
    const track=car.querySelector('.car-track');
    const prev=car.querySelector('.prev'); const next=car.querySelector('.next');
    prev&&prev.addEventListener('click',()=> track.scrollBy({left:-400,behavior:'smooth'}));
    next&&next.addEventListener('click',()=> track.scrollBy({left: 400,behavior:'smooth'}));
  }

  // Delegation (secondary safety net)
  document.addEventListener('click',(e)=>{
    const opener=e.target.closest('[data-open]');
    if(opener){
      e.preventDefault();
      const id=opener.getAttribute('data-open');
      if(id) { window.openModal && window.openModal(id); }
      return;
    }
    const closer=e.target.closest('[data-close]');
    if(closer){
      const id=closer.getAttribute('data-close');
      if(id) { window.closeModal && window.closeModal(id); }
      return;
    }
  });

  // Esc to close
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'){
      document.querySelectorAll('.modal').forEach(m=>m.setAttribute('aria-hidden','true'));
    }
  });

  // year
  const y=document.getElementById('year'); if(y){ y.textContent=(new Date()).getFullYear(); }
});
