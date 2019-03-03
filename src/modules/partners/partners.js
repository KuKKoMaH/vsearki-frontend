var styles = require('../../js/styles');

$('.' + styles.partners.link).smoothScroll({
  offset: -60,
  beforeScroll: function () {
    // menu.removeClass(activeClass);
  },
  afterScroll:  function (options) {
    window.location.hash = options.scrollTarget;
  }
});

$('.' + styles.partners.input + '[type="tel"]').mask("+7 (999) 999-99-99");