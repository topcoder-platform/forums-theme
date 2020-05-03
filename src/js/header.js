/*!
 * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */
"use strict"


$( document ).ready(function() {
  var resetSelectedMenu = function() {
    $(".Header-primary-item, .Header-secondary-item").removeClass('selected');
    $(".Header-Second-Menu").addClass('hide');
  };

  $( ".primary-item-explore" ).click(function() {
    resetSelectedMenu();
    $(this).addClass('selected');
    $(".Header-Second-Menu.Explore-Menu").removeClass('hide');
  });

  $( ".primary-item-tracks" ).click(function() {
    resetSelectedMenu();
    $(this).addClass('selected');
    $(".Header-Second-Menu.Tracks-Menu").removeClass('hide');
  });

  $( ".primary-item-compete" ).click(function() {
    resetSelectedMenu();
    $(this).addClass('selected');
    $(".Header-Second-Menu.Compete-Menu").removeClass('hide');
  });

  $( ".primary-item-community" ).click(function() {
    resetSelectedMenu();
    $(this).addClass('selected');
    $(".Header-Second-Menu.Community-Menu").removeClass('hide');
  });
});
