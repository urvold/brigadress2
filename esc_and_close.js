/* v14.5: Auto-add close X into CSS :target modals + ESC to close */
(function(){
  // Add ESC handler for :target modals
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      if(location.hash && location.hash.startsWith('#m-')){
        location.hash = '#projects';
      }
    }
  });
  // Ensure each modal has a close anchor
  var mods = document.querySelectorAll('.modal .modal-card');
  mods.forEach(function(card){
    if(!card.querySelector('.modal-close')){
      var a = document.createElement('a');
      a.className = 'modal-close';
      a.setAttribute('href', '#projects');
      a.setAttribute('aria-label','Закрыть');
      a.textContent = '×';
      card.insertBefore(a, card.firstChild);
    }
  });
})();