$(function() {
  [].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
    var svgicon = new svgIcon( el, svgIconConfig );
  } );
});