'use strict';

window.app = window.app || {};

$(document).ready(function() {

  app.zoomer = {
    makeFor: function(selector, zoomType) {

      if (zoomType == 'basicZoom') {
        $(selector).ezPlus();
      }

      else if (zoomType == 'lensZoom') {
        $(selector).ezPlus({
          zoomType: 'lens',
          lensShape: 'round',
          lensSize: 150,
        });
      }

      else if (zoomType == 'innerZoom') {
        $(selector).ezPlus({
          zoomType: 'inner',
          borderSize: 1,
          cursor: 'default',
          easing: true,
        });
      }

      else if (zoomType == 'constrainZoom') {
        $(selector).ezPlus({
          zoomType: 'lens',
          containLensZoom: true,
          gallerySelector: '.product-images-block',
          cursor: 'pointer',
          galleryActiveClass: 'current',
          lensSize: 200,
          borderSize: 1,
        });
      }

      else if (zoomType == 'tinsZoom') {
        $(selector).ezPlus({
          tint: true,
          tintColour: '#ac1a1a',
          tintOpacity: 0.5,
          zoomWindowHeight: 300,
          zoomWindowWidth: 300,
          borderSize: 2,
        });
      }

      else if (zoomType == 'scaleZoom') {
        $(selector).hover(function() {
          console.log(selector);
              $(this).css('transform', 'scale(1.05)');
              console.log(selector);
            },
            function() {
              $(this).css('transform', 'scale(1.00)');
            },
        );
      }
      else {
        return;
      }
    },

  };


  //Gallery
  $('.product-images-block').on('click', 'a', function() {
    var link = $(this).attr('data-image');
    $(this).addClass('current').siblings().removeClass('current');
    $('.image-inner img').attr('src', link);
    return false;
  });

  //Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 4,
  });

//Example
app.zoomer.makeFor('.product-list .image img', 'innerZoom');
app.zoomer.makeFor('.product-list .image-2 img', 'tinsZoom');
app.zoomer.makeFor('.product-list .image-3 img', 'lensZoom');
app.zoomer.makeFor('.main-image .image-inner img', 'constrainZoom');
app.zoomer.makeFor('.product-slide img ', 'scaleZoom');

});