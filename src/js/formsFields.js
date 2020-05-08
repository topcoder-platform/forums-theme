'use strict';

$(document).ready(function () {
  $('label.radio-inline').each(function (index) {
    var checkmark = $('<span class="checkmark"></span>');
    $(this).append(checkmark);
  });
});
