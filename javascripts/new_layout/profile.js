$(document).ready(function(){

  $('#profile-stance .panel').hover(function(){
    var indicator = $(this).find('.indicator-time-profile')
    if (indicator.hasClass('showed') == false ){
      indicator.addClass('showed')
      indicator.hide()
    } else {
      indicator.show()
      indicator.removeClass('showed')
    }
  });

  $('.profile-stance .filter h6 span').hover(function(){
    var box = $(this)
    if ($(this).hasClass('showed') == false){
      $(this).addClass('showed')
      box.append('<div class="filter-box"><div class="btn-filter">Hide</div><div class="btn-filter">Move to top</div></div>')
      $(this).find('.filter-box').velocity("transition.flipXIn", 500)
    } else {
      $(this).removeClass('showed')
      var forClose = box.find('.filter-box')
      forClose.stop().velocity("transition.flipXOut", 200)
      setTimeout(function(){
        forClose.remove()}
      , 150);
    }
  });

  $('.action-profile .icon-svg-static-profile.secund').hover(function(){
    var box = $(this)
    if ($(this).hasClass('showed') == false){
      $(this).addClass('showed')
      box.append('<div class="back-stance"><div class="back">Back to stance</div></div>')
      $(this).find('.back-stance').velocity("transition.flipXIn", 500)
    } else {
      $(this).removeClass('showed')
      var forClose = box.find('.back-stance')
      forClose.stop().velocity("transition.flipXOut", 200)
      setTimeout(function(){
        forClose.remove()}
      , 150);
    }
  });



  $('.profile-stance .icon-svg-static-profile.secund, .profile-stance .indicator-time-profile').hover(function(){
    var box = $(this).parent()
    if ($(this).hasClass('showed') == false){
      $(this).addClass('showed')
      $(this).append('<div class="options-profile"><div class="hide-panel">Hide</div><div class="move-top-panel">Move to top</div></div>')
      $(this).find('.options-profile').velocity("transition.flipXIn", 500)
      $(this).find('.options-profile .hide-panel').bind('click', function(){
        var wrraper = $(this).parent().parent().parent()
        wrraperHeight = wrraper.outerHeight()
        box.velocity("transition.flipXOut", 500)
          wrraper.css('height', wrraperHeight)
          wrraper.velocity({ height: 0 }, 500)
          setTimeout(function(){
              box.remove()
            }
        , 500);
      })
      $(this).find('.options-profile .move-top-panel').bind('click', function(){
        var wrraper = $(this).parent().parent().parent().parent()
          wrraperHeight = wrraper.outerHeight()

        wrraper.velocity({ height: 0 }, 500)
        $('.filter')
          .after('<div class="panel-wrraper-new"></div>')

        var newWrraper = $('.panel-wrraper-new')
        newWrraper.velocity({ height: wrraperHeight}, 500).css('margin-bottom', '20px' )
        console.log(newWrraper)
        box.velocity("transition.fadeOut", 500);
        setTimeout(function(){
          box
            .appendTo(newWrraper)
            .velocity("transition.fadeIn", 500);
          newWrraper.removeClass("panel-wrraper-new").addClass("panel-wrraper");
          wrraper.remove()
        }, 500);
      })
    } else {
      $(this).removeClass('showed')
      var forClose = $(this).find('div.options-profile')
      forClose.off('click')
      forClose.stop().velocity("transition.flipXOut", 200)
      setTimeout(function(){
        forClose.remove()}
      , 150);
    }
  });
});
