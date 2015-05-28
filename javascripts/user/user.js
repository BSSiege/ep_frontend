$( document ).ready(function() {
   $("#signup, #login").css("min-height",$(window).height()-$("header").height()+"px")
   /* --------------------------------------------------- */
  /*	Scrollbar design 
   /* --------------------------------------------------- */
   $(".nano").nanoScroller();

   // TOOL TIp

  $('.tooltips').append("<span></span>");
  $('.tooltips:not([tooltip-position])').attr('tooltip-position','bottom');


  $(".tooltips").mouseenter(function(){
    $(this).find('span').empty().append($(this).attr('tooltip'));
  });
 	
 	// $(".stances").flip({
 	// 	reverse: true
 	// });
	$(".flip-container").flip({
		trigger: 'manual'
	});
	$(".stances .card a.button").click(function(event){
		event.preventDefault();
		// console.log("ok....");
	    $(".flip-container").flip(true);
    });
});

function DropDown(el) {
  this.dd = el;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;
    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      event.stopPropagation();
    }); 
  }
}
$(function() {
  var dd = new DropDown( $('.wrapper-dropdon-2') );
	$(document).click(function() {
	  $('.wrapper-dropdon-2').removeClass('active');
	});
});