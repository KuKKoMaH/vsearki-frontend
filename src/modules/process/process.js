var styles = require('../../js/styles');

$('.' + styles.process.item).magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  image: {
    titleSrc: function(item) {
      return item.el.find('.' + styles.process.name).text();
    }
  }
});