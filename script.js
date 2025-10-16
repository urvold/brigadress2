
document.getElementById('contactSelect')?.addEventListener('change', (e)=>{
  const v = e.target.value;
  if (v==='tg') location.href='https://t.me/your_telegram';
  if (v==='wa') location.href='https://wa.me/79334191597';
});
