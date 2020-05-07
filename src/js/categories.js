"use strict"


$( document ).ready(function() {
  $( "ul.DataList.CategoryList li.Item:not(.CategoryHeading) .ItemContent.Category" ).each(function( index ) {
    var originalMeta = $( this ).find('.Meta');
    $(this).append(originalMeta.clone().addClass('view-comment-container hide-desktop'));
    originalMeta.addClass('status-container');
  });
})
