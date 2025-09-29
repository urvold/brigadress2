
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

  // modal delegation
  document.addEventListener('click',(e)=>{
    const more=e.target.closest('a.more');
    if(more){ e.preventDefault(); }
    const opener=e.target.closest('[data-open]');
    if(opener){
      e.preventDefault();
      const id=opener.getAttribute('data-open');
      const m=document.getElementById(id);
      if(m){ m.setAttribute('aria-hidden','false'); }
      return;
    }
    const closer=e.target.closest('[data-close]');
    if(closer){
      const id=closer.getAttribute('data-close');
      const m=document.getElementById(id);
      if(m){ m.setAttribute('aria-hidden','true'); }
      return;
    }
    const dim=e.target.closest('.modal-dim');
    if(dim){
      const id=dim.getAttribute('data-close');
      const m=document.getElementById(id);
      if(m){ m.setAttribute('aria-hidden','true'); }
      return;
    }
  });
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'){
      document.querySelectorAll('.modal').forEach(m=>m.setAttribute('aria-hidden','true'));
    }
  });
});


// Global modal helpers (fallback-safe)
window.openModal = function(id){
  var m = document.getElementById(id);
  if(m){ m.setAttribute('aria-hidden','false'); }
};
window.closeModal = function(id){
  var m = document.getElementById(id);
  if(m){ m.setAttribute('aria-hidden','true'); }
};

