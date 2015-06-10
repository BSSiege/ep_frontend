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
          "min-height": 0
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
  /* --------------------------------------------------- */
  /*  close button 
  /* --------------------------------------------------- */
  $(".button--close").click(function(event){
    event.preventDefault();
    $(".right__card--blue").fadeOut("slow");
  })

  /* --------------------------------------------------- */
  /*  Social button animation
  /* --------------------------------------------------- */

  $(".font__color--icon-blue.social a").click(function(event){
    event.preventDefault();

    $("#social__share").hide();
    var text = '<div class="card" id="social__share"><h3 class="line__height--105em">Where do you want to share?</h3><div class="icon__box"><div class="icon__box--holder font__color--icon-blue facebook"><i class="icon-facebook"></i></div><div class="icon__box--holder font__color--icon-blue twitter"><i class="icon-twitter"></i></div><div class="icon__box--holder font__color--icon-blue linkedin"><i class="icon-linkedin"></i></div></div><form action="" class=="margin__top--4"><textarea class="width--full border__radius--no" name="" id="field" onkeyup="countChar(this)" cols="30" rows="10"></textarea><p class="float--right font__color--secondary" id="charNum">(400)</p><div class="margin__top--30"></div><button type="submit" class="button font__weight--400 display--inblock">Post</button><p class="display--inblock margin__left--6 margin__bottom--30">|<a class="underline margin__left--6" href="">Cancel</a></p></form></div>';
    $(this).parents().eq(1).after(text);

    $("#social__share").hide();
    $("#social__share").fadeIn("slow");


    var SharedFor = $(this).data("socialSite");
    console.log(SharedFor);
    $("#social__share").find("."+SharedFor).addClass("selected");
  })
  /* --------------------------------------------------- */
  /*  Settings accordion
  /* --------------------------------------------------- */
  $('#cssmenu > ul > li > a').click(function() {
    var checkElement = $(this).next();
    if($(".has-sub.active").length === 1){
      $('#cssmenu ul ul:visible').slideUp('normal');
    }
    $('#cssmenu li').removeClass('active');
    $(this).closest('li').addClass('active'); 
    

    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }

    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#cssmenu ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    $('#cssmenu ul ul a').click(function() {
      $('#cssmenu ul ul a').removeClass("selected");
      $(this).addClass("selected");
    });
    if($(this).closest('li').find('ul').children().length == 0) {
      return true;
    } else {
      return false; 
    }   
  });

  /* --------------------------------------------------- */
  /*  Settings page edit button
  /* --------------------------------------------------- */
  // $(".edit__element").hide();
  $(".settings__box .edit").click(function(event){
    event.preventDefault();
    $(this).hide();
    $(this).parents().eq(1).prev().hide();
    // $(this).parents().eq(1).next().fadeIn("slow");
    $(this).parents().eq(1).next().slideDown("slow");
  })
  $(".edit__element button").click(function(event){
    event.preventDefault();
    $(".edit__element").slideUp();
    $(".settings__box .content__info__wrapper--onethird, .settings__box .content__info__wrapper--onethird a").fadeIn();
  })


  $(".social__connect__box").hover(function() {
        $(this).children(".social__overlay").stop().animate({bottom: '0px'}, 500);
  }, 
  function() {
        $(this).children(".social__overlay").stop().animate({bottom: '-174px'}, 500);
  });



});

function countChar(val) {
    var len = val.value.length;
    if (len >= 500) {
      val.value = val.value.substring(0, 500);
    } else {
      $('#charNum').text(500 - len);
    }
  };



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