!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";
/*!
 * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */$(document).ready(function(){var e=$(".Frame-header"),t=function(){$(".Header-primary-item, .Header-secondary-item, .Header-Primary-Sub-Mobile a").removeClass("selected"),$(".Header-Second-Menu, .Header-Second-Menu-mobile").addClass("hide").removeClass("open"),e.toggleClass("toggle-mobile-expand"),e.toggleClass("toggle-mobile-close"),$(".Header-Primary-more-content-container").removeClass("open")};$(".primary-item-explore").click(function(){t(),$(".primary-item-explore").addClass("selected"),$(".Header-Second-Menu.Explore-Menu, .Header-Second-Menu-mobile.Explore-Menu").removeClass("hide")}),$(".primary-item-tracks").click(function(){t(),$(".primary-item-tracks").addClass("selected"),$(".Header-Second-Menu.Tracks-Menu, .Header-Second-Menu-mobile.Tracks-Menu").removeClass("hide")}),$(".primary-item-compete").click(function(){t(),$(".primary-item-compete").addClass("selected"),$(".Header-Second-Menu.Compete-Menu, .Header-Second-Menu-mobile.Compete-Menu").removeClass("hide")}),$(".primary-item-community").click(function(){t(),$(this).addClass("selected"),$(".Header-Second-Menu.Community-Menu").removeClass("hide")}),$(".menu-icon-mobile").click(function(){e.toggleClass("toggle-mobile-expand"),e.toggleClass("toggle-mobile-close")}),$(".Second-Menu-Toggle-Button, .primary-item-more").click(function(){$(this).parent().toggleClass("open")})})},function(e,t,n){"use strict";$(document).ready(function(){"/"!==window.location.pathname&&$("body").removeClass("index")})},function(e,t,n){"use strict";$(document).ready(function(){$("ul.DataList.Discussions li.Item .ItemContent.Discussion").each(function(e){var t=$(this).find(".Meta.Meta-Discussion");$(this).append(t.clone().addClass("view-comment-container hide-desktop")),$(this).prepend(t.clone().addClass("tag-container hide-desktop")),t.addClass("status-container")})})},function(e,t,n){"use strict";$(document).ready(function(){$(".Pager.NumberedPager .Next").html("NEXT"),$(".Pager.NumberedPager .Previous").html("PREVIOUS")})},function(e,t,n){"use strict";$(document).ready(function(){$("ul.DataList.CategoryList li.Item:not(.CategoryHeading) .ItemContent.Category").each(function(e){var t=$(this).find(".Meta");$(this).append(t.clone().addClass("view-comment-container hide-desktop")),t.addClass("status-container")})})},function(e,t,n){"use strict";$(document).ready(function(){$("label.radio-inline").each(function(e){var t=$('<span class="checkmark"></span>');$(this).append(t)})})},function(e,t,n){"use strict";n.r(t);
/*!
 * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */
var o="needsInitialization",i="data-height",r="0px";function a(e){e.style.height=r}function s(e){if(e&&e.classList){e.classList.add(o),e.style.height="auto";var t=e.getBoundingClientRect().height;e.setAttribute(i,t.toString()),a(e),e.classList.remove(o)}}
/*!
 * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */
$(function(){window.gdn.getMeta("featureFlags.DataDrivenTitleBar.Enabled",!1)||function(){var e=document.querySelector("#menu-button"),t=document.querySelector(".js-nav"),n=document.querySelector(".js-mobileMebox"),o=document.querySelector(".mobileMeBox-button"),c=document.querySelector(".mobileMebox-buttonClose"),l=document.querySelector("#MainHeader");function u(e){e.style.height===r?function(e){e.style.height=e.getAttribute(i)+"px"}(e):a(e)}s(n),s(t),window.addEventListener("resize",function(){requestAnimationFrame(function(){s(n),s(t)})}),e&&e.addEventListener("click",function(){e.classList.toggle("isToggled"),l.classList.toggle("hasOpenNavigation"),a(n),u(t)}),o&&o.addEventListener("click",function(){o.classList.toggle("isToggled"),l.classList.remove("hasOpenNavigation"),e.classList.remove("isToggled"),a(t),u(n)}),c&&c.addEventListener("click",function(){a(n)})}(),$("select").wrap('<div class="SelectWrapper"></div>')}),n(0),n(1),n(2),n(3),n(4),n(5)}]);
//# sourceMappingURL=custom.js.map