import ScrollReveal from 'scrollreveal';
import $ from 'jquery';
$(document).ready(function(){
  $('#myHeader').fadeIn(2000);
  window.sr = ScrollReveal();
  window.sr.reveal('.panel', { duration: 2000 });
});
