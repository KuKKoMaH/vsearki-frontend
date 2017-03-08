var styles = require('../../js/styles');

var $popup = $("#request");

$('.' + styles.popular.order).magnificPopup({
  type: 'inline',
  callbacks: {
    open: function () {
      var selected = this.currItem.el.parent().find('.' + styles.popular.name).text();
      this.content.find('.' + styles.popup.selected).text('Вы выбрали: ' + selected);
      this.content.find('input').val('');
      this.content.find('[name="brand"]').val(selected);
    },
  }
});