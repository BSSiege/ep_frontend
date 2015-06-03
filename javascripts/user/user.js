$( document ).ready(function() {
   $("#signup, #login").css("min-height",$(window).height()-$("header").height()+"px")
  /* --------------------------------------------------- */
  /*	Scrollbar design 
  /* --------------------------------------------------- */
   $(".nano").nanoScroller();

  /* --------------------------------------------------- */
  /*  Tool Tip
  /* --------------------------------------------------- */

  $('.tooltips').append("<span></span>");
  $('.tooltips:not([tooltip-position])').attr('tooltip-position','bottom');


  $(".tooltips").mouseenter(function(){
    $(this).find('span').empty().append($(this).attr('tooltip'));
  });

  /* --------------------------------------------------- */
  /*  Stance flip animation
  /* --------------------------------------------------- */
  // Hiding all justification card on right
  $(".stance__details").css("display","none");
  // Fixing the height due to fliping css
  $( ".flip-container" ).map(function() {
    $( this ).height($(this).find(".front").height()+80);
  });

  //Clicking on the stance
  $(".stance").click(function(event){
    event.preventDefault();

    $(this).addClass("selected"); // Blue colur on stance button

    // 500ms delay for showing the blue button
    setTimeout(function(){ 
      var FlipContainer = $(this).parents().eq(2); // parent class .flip-container
      FlipContainer.addClass("clicked"); // fliping animation
      var StanceValues = $(this).data("stanceValue"); // get clicked stance value
      FlipContainer.find(".stance__result").append("We should "+StanceValues); // appened on the back card
      
      // Setting up new height and scroll up animation 
      FlipContainer.animate({
          height: FlipContainer.find(".back").height()+80
        }, 500, function() {
      });

      // Right blue card hide
      $(".right__card--blue").animate({
          "min-height": 1
        }, 500, function() {
          $(".right__card--blue").hide("fast");
      });
      // Showing justification card on right
      var JustificationBoardID = $(this).data("justificationBoardId"); // grabing right justification card id
      // If there is showing another stance justification card
      if($(".stance__details").hasClass("active")){
        $(".stance__details").removeClass("active");
        $(".stance__details").css("display","none");
      }
      // Showing justification card on right
      $("#"+JustificationBoardID).addClass("active");
      $("#"+JustificationBoardID).show("slow");
      $("#"+JustificationBoardID+" .card > h3").append("We should "+StanceValues); // appending stance value
    

    }.bind(this), 500);
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