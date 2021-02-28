/*!
 * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */
"use strict"


$( document ).ready(function() {
  var frameHeader = $('.Frame-header');

  var resetSelectedMenu = function() {
    $(".Header-primary-item, .Header-secondary-item, .Header-Primary-Sub-Mobile a").removeClass('selected');
    $(".Header-Second-Menu, .Header-Second-Menu-mobile").addClass('hide').removeClass('open');
    frameHeader.toggleClass('toggle-mobile-expand');
    frameHeader.toggleClass('toggle-mobile-close');
    $(".Header-Primary-more-content-container").removeClass('open');

  };

  $( ".primary-item-explore" ).click(function() {
    resetSelectedMenu();
    $(".primary-item-explore").addClass('selected');
    $(".Header-Second-Menu.Explore-Menu, .Header-Second-Menu-mobile.Explore-Menu").removeClass('hide');
  });

  $( ".primary-item-tracks" ).click(function() {
    resetSelectedMenu();
    $(".primary-item-tracks").addClass('selected');
    $(".Header-Second-Menu.Tracks-Menu, .Header-Second-Menu-mobile.Tracks-Menu").removeClass('hide');
  });

  $( ".primary-item-compete" ).click(function() {
    resetSelectedMenu();
    $(".primary-item-compete").addClass('selected');
    $(".Header-Second-Menu.Compete-Menu, .Header-Second-Menu-mobile.Compete-Menu").removeClass('hide');
  });

  $( ".primary-item-community" ).click(function() {
    resetSelectedMenu();
    $(this).addClass('selected');
    $(".Header-Second-Menu.Community-Menu").removeClass('hide');
  });


  $( ".menu-icon-mobile" ).click(function() {
    frameHeader.toggleClass('toggle-mobile-expand');
    frameHeader.toggleClass('toggle-mobile-close');
  });
  $( ".Second-Menu-Toggle-Button, .primary-item-more" ).click(function() {
    $(this).parent().toggleClass('open');
  });

  $(document).on('OpenFlyout', function(sender, $toggleFlyout) {
    if($("a#meButton").attr("aria-expanded")=="false") {
        $("a#meButton").find(".icon").removeClass('icon-chevron-up');
        $("a#meButton").find(".icon").addClass('icon-chevron-down');
    } else {
      $("a#meButton").find(".icon").addClass('icon-chevron-up');
      $("a#meButton").find(".icon").removeClass('icon-chevron-down');
    }
  });

  $(document).on('CloseFlyout', function(sender, $toggleFlyout) {
    if($("a#meButton").attr("aria-expanded")=="false") {
      $("a#meButton").find(".icon").removeClass('icon-chevron-up');
      $("a#meButton").find(".icon").addClass('icon-chevron-down');
    } else {
      $("a#meButton").find(".icon").addClass('icon-chevron-up');
      $("a#meButton").find(".icon").removeClass('icon-chevron-down');
    }
  });


});
