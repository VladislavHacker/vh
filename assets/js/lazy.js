(function(){
  document.querySelectorAll('.lazy-loading').forEach(function(el){
    el.src = el.getAttribute('data-src');
    el.removeAttribute('data-src');
    el.style.opacity = '1';
  })
})();
