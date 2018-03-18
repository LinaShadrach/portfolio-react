import ScrollReveal from 'scrollreveal';
import $ from 'jquery';
$(document).ready(function(){
  window.sr = ScrollReveal();
  window.sr.reveal('.panel', { duration: 2000 });
});
