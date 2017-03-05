var styles = require('../../js/styles');

$('.' + styles.faq.question).on('click', function(e) {
  var $item = $(e.target);
  $item.parent().toggleClass(styles.faq.item_active);
});

