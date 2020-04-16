(function(timer) {
  window.addEventListener('load', function() {
    var el = document.querySelector('#foundationVocab');
    el.addEventListener('scroll', function(e) {
    (function(el){
      el.classList.add('scroll');
      clearTimeout(timer);
      timer = setTimeout(function() {
        el.classList.remove('scroll');
      }, 80);    
    })(el);
    })
  })
})();

// $( ".testscroll1" ).wrap( "<div class='testscroll2'></div>" );