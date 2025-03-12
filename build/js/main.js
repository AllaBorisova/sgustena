Fancybox.bind("[data-fancybox]", {
  // Your custom options
} );



jQuery( document ).ready( function ( $ ) {
  
  //phone mask
  $('.input-tel').mask('+7 (999) 999-99-99');
  $('.input-code').mask('9999');

  //mobile menu
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  $('.header-popup__close').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  $('.input-file input[type=file]').on('change', function () {
    let file = this.files[0];
    // $(this).next().html(file.name);
  } );

  $('.counter__plus').click(function(e){
    fieldName = $(this).parent().find('.add-sale__input');
    let currentVal = Number(fieldName.val());
    if (!isNaN(currentVal)) {
      fieldName.val(currentVal + 1);
    } else {
      fieldName.val(0);
    }
  });

  $(".counter__minus").click(function(e) {
      fieldName = $(this).parent().find('.add-sale__input');
      let currentVal = Number(fieldName.val());
      if (!isNaN(currentVal) && currentVal > 0) {
        fieldName.val(currentVal - 1);
      } else {
        fieldName.val(0);
      }
  });

  const resumeImg1 = $('.svg1');
  const resumeImg2 = $('.svg2');
  const resumeImg3 = $( '.svg3' );

  const resumeImg4 = $('.svg4');
  const resumeImg5 = $('.svg5');
  
  const layer = $('.main');
  
      var proxyfn = function(event, concat) {
        return "translate3d(".concat(event / 8, "px,").concat(concat / 8, "px,0)");
      };
  
    function count(Img, e, number, sign, variant) {
      const valueX = (e.pageX * sign) / number;
      const valueY = (e.pageY * sign) / number;
    //   let valueX,valueY;
  
    //   switch (variant){
    //   case 'vc':
    //     valueX = e.pageX / 10;
    //     valueY = e.pageY / 10;
    //     break;
    //   case 'fc':
    //     valueX = e.pageX / 8;
    //     valueY = e.pageY / 8;
    //     break;
    //   case 'Nc':
    //     valueX = e.pageX / 6;
    //     valueY = e.pageY / 6;
    //     break;
    //   case 'Cc':
    //     // valueX = e.pageX / 3.5;
    //     // valueY = e.pageY / 3.5;
    //     valueX = e.pageX / 9;
    //     valueY = e.pageY / 9;
    //     break;
      
    // default:
    //    valueX = e.pageX / 10;
    //    valueY = e.pageY / 10;
    //   break;
    //   }
     
      
      Img.css('transform', 'translate3d(' + valueX + 'px,' + valueY + 'px, 0)');
    }
  
    layer.mousemove(function (e) {
      count(resumeImg1, e, 20, -1, 'vc');
      count(resumeImg2, e, 40, -1, 'fc');
      count( resumeImg3, e, 60, -11, 'Nc' );
      
      count(resumeImg4, e, 40, -1, 'fc');
      count(resumeImg5, e, 60, 1, 'Nc');
    });
});
