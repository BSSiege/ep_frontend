//= require new_layout/foundation/foundation
//= require new_layout/foundation/foundation.abide
//= require new_layout/foundation/foundation.accordion
//= require new_layout/foundation/foundation.alert
//= require new_layout/foundation/foundation.clearing
//= require new_layout/foundation/foundation.dropdown
//= require new_layout/foundation/foundation.equalizer
//= require new_layout/foundation/foundation.interchange
//= require new_layout/foundation/foundation.joyride
//= require new_layout/foundation/foundation.magellan
//= require new_layout/foundation/foundation.offcanvas
//= require new_layout/foundation/foundation.orbit
//= require new_layout/foundation/foundation.reveal
//= require new_layout/foundation/foundation.slider
//= require new_layout/foundation/foundation.tab
//= require new_layout/foundation/foundation.tooltip
//= require new_layout/foundation/foundation.topbar


$(document).ready(function() {
  $(document).foundation();

  $('#registrationReval').click(function() {
    $('#registrationModal').foundation('reveal', 'open');
  });

  $('#loginReval').click(function() {
    $('#loginModal').foundation('reveal', 'open');
  });
});