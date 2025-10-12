
const DATA_URL = 'assets/projects.json';
let DATA = {};
fetch(DATA_URL).then(r=>r.json()).then(j=>DATA=j);

// Open modal with details
function openDetails(key){
  const p = DATA[key]; if(!p) return;
  const bg = document.querySelector('.modal-backdrop'); 
  const m = document.querySelector('.modal'); 
  m.querySelector('h3').textContent = (p.title || key.replace(/\d+$/,'').toUpperCase()) + ' — детали проекта';
  const hero = m.querySelector('.hero');
  hero.src = p.img;
  m.querySelector('.body').innerHTML = `
    <div class="price">${p.price}</div>
    <div class="meta">Площадь: ${p.area} • ${p.rooms}</div>
    <p style="margin-top:10px">${p.lead || ''}</p>
    <p>${p.desc || ''}</p>
    <div class="btns"><a class="btn btn--primary" href="#form">Получить сметы</a></div>`;
  bg.style.display='flex';
}
function closeModal(){
  document.querySelector('.modal-backdrop').style.display='none';
}
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

// Contact select
function handleContactChange(){
  const v = document.getElementById('contact_way').value;
  const phone = '+79334191597';
  const tg = 'https://t.me/brigadress';
  const wa = 'https://wa.me/79334191597';
  const link = document.getElementById('contact_link');
  if(v==='tg'){ link.href = tg; link.textContent='Открыть Telegram'; link.style.display='inline-flex'; }
  else if(v==='wa'){ link.href = wa; link.textContent='Открыть WhatsApp'; link.style.display='inline-flex'; }
  else if(v==='call'){ link.href = 'tel:' + phone; link.textContent='Позвонить'; link.style.display='inline-flex'; }
  else { link.removeAttribute('href'); link.style.display='none'; }
}
