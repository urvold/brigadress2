
document.addEventListener('DOMContentLoaded', () => {
  const how = document.getElementById('how');
  document.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault();
    switch(how.value){
      case 'call': window.location.href='tel:+79334191597'; break;
      case 'tg': window.open('https://t.me/brigadress','_blank'); break;
      case 'wa': window.open('https://wa.me/79334191597','_blank'); break;
      default: alert('Спасибо! Мы скоро свяжемся.'); 
    }
  });
});
