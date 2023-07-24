//BARRA MOVIL
$(window).on("scroll", function() {

   if ($(".navbar").offset().top > 40) {
      $(".navbar").addClass("navbar-fixed");
      $(".go-top").show();

   } else {
      $(".navbar").removeClass("navbar-fixed");
      $(".go-top").hide();

   }
})

$(document).ready(function() {
   var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
   });

   $('#portfolio-filters li').on('click', function() {
      $("#portfolio-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
         filter: $(this).data('filter')
      });
   });

   $('.popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      gallery: {
         enabled: true,
         navigateByImgClick: true
      }
   });

   $("#navbarNav").on('show.bs.collapse', function() {

      $(".navbar").addClass("navbar-fixed");

      $('a.nav-link, a.btn-custom').click(function() {
         $("#navbarNav").collapse('hide');
      });
   });


});

//SLIDER CERTIFICACIONES
$(document).ready(function () {

   // Seleccionando elementos en variables
   var slider = $('#slider');
   var btnAnterior = $('#btnAnterior');
   var btnSiguiente = $('#btnSiguiente');
 
   // Se pasa el último slide al primer lugar
   $('#slider .slide:last').insertBefore('#slider .slide:first');
 
   // Con margen negativo se vuelve a mostrar el primer slide
   slider.css('margin-left', '-43%');
 
   // Funcion para que el slide se mueva a la derecha
   function moverDerecha() {
     if (!slider.is(':animated')) {
       slider.animate({
         marginLeft: '-105.6%'
       }, 700, function () {
         $('#slider .slide:first').insertAfter('#slider .slide:last');
         slider.css('margin-left', '-43%');
         resetInterval();
       });
     }
 
   }
 
   btnSiguiente.on('click', moverDerecha);
 
   // Funcion para que el slide se mueva a la izquierda
   function moverIzquierda() {
     if (!slider.is(':animated')) {
       $('#slider .slide:last').insertBefore('#slider .slide:first');
       slider.css('margin-left', '-105.6%');
       slider.animate({
         marginLeft: '-43%'
       }, 700, function () {
         resetInterval()
       });
     }
 
   }
 
   btnAnterior.on('click', moverIzquierda);
 
 
 
   // Intervalo para que el slide se mueva automáticamente
   var intervalo = setInterval(moverDerecha, 7000);
 
   function resetInterval(){
     clearInterval(intervalo);
     intervalo = setInterval(moverDerecha, 6000);
   }
 
 });