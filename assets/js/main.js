
function bindProjectCards(){
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('click',(e)=>{
      if(e.target.closest('a')) return;
      e.preventDefault();
      const m = document.getElementById('project-modal');
      m.classList.add('is-open'); m.setAttribute('aria-hidden','false');
      document.getElementById('pm-img').src = card.dataset.img;
      document.getElementById('pm-img').alt = card.dataset.title;
      document.getElementById('pm-title').textContent = card.dataset.title;
      document.getElementById('pm-meta').textContent  = card.dataset.meta;
      document.getElementById('pm-desc').textContent  = card.dataset.desc;
    });
  });
}
function closeModal(){
  const m = document.getElementById('project-modal');
  if(!m) return; m.classList.remove('is-open'); m.setAttribute('aria-hidden','true');
}
document.addEventListener('click',(e)=>{
  if(e.target.matches('[data-close-modal]')) closeModal();
  if(e.target.matches('.project-modal__backdrop')) closeModal();
});
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeModal(); });
document.addEventListener('DOMContentLoaded', bindProjectCards);
