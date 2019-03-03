require('magnific-popup');
require('jquery.maskedinput/src/jquery.maskedinput.js');
var styles = require('../../js/styles');

$('.' + styles.popup.opener).magnificPopup({
  type: 'inline',
});

$('.' + styles.popup.input)
  .on('input', function (e) {
    var clearVal = e.target.value.replace(/[^0-9]/g, '');
    if (clearVal.length === 11 && clearVal[0] === '7') {
      e.preventDefault();
      e.stopPropagation();
      e.target.value = clearVal.slice(1);
      return false;
    }
  })
  .mask("(999) 999-99-99");