var styles = require('../../js/styles');
var menu = $('.' + styles.header['menu-wrapper']);

$('.' + styles.header.hamburger + ', .' + styles.header.close).on('click', function(e){
  e.preventDefault();
  menu.toggleClass(styles.header['menu-wrapper-active']);
});