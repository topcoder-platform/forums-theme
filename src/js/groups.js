"use strict"
$( document ).ready(function() {
  $( "ul.DataList.GroupList li.Item .ItemContent.Group" ).each(function( index ) {
    var originalMeta = $( this ).find('.Meta.Meta-Group');
    $(this).append(originalMeta.clone().addClass('view-comment-container hide-desktop'));
    originalMeta.addClass('status-container');
  });
})