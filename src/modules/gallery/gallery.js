require('flickity/dist/flickity.pkgd.js');
require('magnific-popup');
var styles = require('../../js/styles');

var $container = $('.' + styles.gallery.container);

$container.flickity({
  cellAlign: 'left',
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true,
  contain: true,
});

$container.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
  $container.magnificPopup('open', cellIndex);
});

$container.magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
});