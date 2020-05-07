"use strict"


$( document ).ready(function() {
  $( "ul.DataList.Discussions li.Item .ItemContent.Discussion" ).each(function( index ) {
    var originalMeta = $( this ).find('.Meta.Meta-Discussion');
    $(this).append(originalMeta.clone().addClass('view-comment-container hide-desktop'));
    $(this).prepend(originalMeta.clone().addClass('tag-container hide-desktop'));
    originalMeta.addClass('status-container');
  });
})
