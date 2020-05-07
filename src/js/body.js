"use strict"


$( document ).ready(function() {
  var pathname = window.location.pathname;
  if (pathname !== '/') {
    $('body').removeClass('index');
  }
})
