$(document).ready(function(){
    var divs1 ='<div class="action-bar"><p>Justification option<a class="right">Write your own</a></p></div><div class="action panel"><h3>We should decriminalize marijuana</h3><h5>Justification</h5><p>After we have accumulated in the data regarding the legalization of marijuana we can say with certainty, that legalizing marijuana decreased the Criminal activity in the participating states.</p><div class="for-hide"><p>My continuous support on this subject is firm, and I call other states to adopt this policy.</p><a class="right" href="#">Read more</a><h5>Stance by</h5><img alt="Debate_thumb_avatar" src="/assets/debate_thumb_avatar.jpg" class="mCS_img_loaded"><div class="senator-data"><p>Senator Paul grand</p><p><span>Political influence (Pi): 20k</span></p></div><div class="buttons"><button>Support and adapt stance</button><span class="devider">|</span><a>Follow activity</a></div></div></div>'
      div1 = $(divs1)
      divs2 = '<div class="action-bar"><p>Justification option<a class="right">Write your own</a></p></div><div class="action panel"><h3>We should decriminalize marijuana</h3><h5>Justification</h5><p>After we have accumulated in the data regarding the legalization of marijuana we can say with certainty, that legalizing marijuana decreased the Criminal activity in the participating states.</p><div class="buttons for-expand"><button>Expand</button></div></div>'
      div2 = $(divs2)
      divs3 = '<div class="action-bar"><p>Justification option</p></div><div class="action debate-end panel"><h3>We should decriminalize marijuana</h3><h5>Justification</h5><p>After we have accumulated in the data regarding the legalization of marijuana we can say with certainty, that legalizing marijuana decreased the Criminal activity in the participating states.</p><p>My continuous support on this subject is firm, and I call other states to adopt this policy.</p><a class="right" href="#">Read more</a><br><br><p>After we have accumulated in the data regarding the legalization of marijuana we can say with certainty, that legalizing marijuana decreased the Criminal activity in the participating states.</p><p>My continuous support on this subject is firm, and I call other states to adopt this policy.</p><a class="right" href="#">Read more</a><br><br><div class="link"><a href="#"> List of debated questions</a><span class="devider">|</span><a href="#"> Full debate</a></div><ul class="button-group"><li><a class="button">Support<br>Jane Austen</a></li><li><a class="button">Neutral<br><br></a></li><li><a class="button">Support<br>Jane Austen</a></li></ul></div>'
      div3 = $(divs3)
      divs4 = '<div class="action-bar"><p>Justification option<a class="right">Write your own</a></p></div><div class="action status panel"><img alt="Debate_thumb_avatar" src="/assets/debate_thumb_avatar.jpg" class="mCS_img_loaded"><div class="senator-data"><p>Senator Paul grand</p><p><span>Political influence (Pi): 20k</span></p></div><p>You supported and accepted Paul justification in 13/1/15.current adjusted stands is below, Do you extend your support?</p><h5>Justification</h5><p class="hero-lead">We should decriminalize marijuana</p><h5>Justification</h5><p class="hero-lead">We should decriminalize marijuana</p><h5>Justification</h5><p>After we have accumulated in the data regarding the legalization of marijuana we can say with certainty, that legalizing marijuana decreased the Criminal activity in the participating states.</p><a class="right" href="#">Read more</a><br><h5>Justification</h5><p>After we have accumulated in the data regarding the legalization of marijuana we can say with certainty, that legalizing marijuana decreased the Criminal activity in the participating states.</p><p>My continuous support on this subject is firm, and I call other states to adopt this policy.</p><div class="status-button"><button>Support and adapt stance</button></div><div class="link"><a class="centered" href="#">Follow activity</a></div></div>'
      div4 = $(divs4)

    function Wraper() {
      this.x = 0;
      this.y = 0;
    }

var panels = $('#my-decision .panel, #decision .panel')
var myDecisions = $('#my-decision .panel')
var decisions = $('#decision .panel')


$('#my-decision .panel, #decision .panel').hover(function(){
  var indicator = $(this).find('.indicator-time')
    if (indicator.hasClass('showed') == false ){
      indicator.addClass('showed')
      indicator.hide()
    } else {
      indicator.show()
      indicator.removeClass('showed')
    }
});

$('.icon-svg-static.secund, .indicator-time').hover(function(){
  var box = $(this).parent()
  if ($(this).hasClass('showed') == false){
    $(this).addClass('showed')
    $(this).append('<div class="for-hide-panel button">Hide</div>')
    $(this).find('.for-hide-panel').velocity("transition.flipXIn", 500).bind('click', function(){
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
  } else {
    $(this).removeClass('showed')
    var forClose = $(this).find('div.for-hide-panel')
    forClose.off('click')
    forClose.stop().velocity("transition.flipXOut", 200)
    setTimeout(function(){
      forClose.remove()}
    , 150);
  }
});

function myDecision(el){
  el.on('click','.button-decision button', function() {
    var box = $(this).parent().parent();
      buttons = $(this).parent();
      buttonsMy = $(this).parent().siblings('div.my-button-decision');
    box.velocity("transition.flipXOut", 500);
    setTimeout(function(){
      buttonsMy.removeClass('hide');
      buttons.addClass('hide');
      box.velocity("transition.flipXIn", 500);
    }
    , 500);
    counts = counts + 1
    if (counts == 1){
        div3.prependTo('#sticky-content').wrap('<div class="panel-wrraper"></div>')
      .velocity("transition.fadeIn", 500)
    } else{
        div4.prependTo('#sticky-content').wrap('<div class="panel-wrraper"></div>')
      .velocity("transition.fadeIn", 500)
    }
    // backToDecision($(this))
  })
}
myDecision(myDecisions)

function backToDecision(el){
  el.on('click', '.my-button-decision button', function() {
    var buttons = $(this).parent().siblings('div.button-decision');
      buttonsMy = $(this).parent();
      box = $(this).parent().parent();
    box.velocity("transition.flipXOut", 500);
    setTimeout(function(){
      buttons.removeClass('hide');
      buttonsMy.addClass('hide');
      box.velocity("transition.flipXIn", 500);
    }
    , 500);
  })
}
backToDecision(myDecisions)

var count = 0
var counts = 0

function decision(el){
  el.on('click', '.button-decision button', function(){
    var box = $(this).parent().parent()
      wrraper = $(this).parent().parent().parent()
      wrraperHeight = wrraper.outerHeight()
      button = $(this).parent().siblings('div.si-icons.si-icons-default')
      buttons = $(this).parent()
      buttonsMy = $(this).parent().siblings('div.my-button-decision').children()

    box.off('click', '.button-decision button')
    $(this).removeClass('move-panel')

    wrraper.css('height', wrraperHeight)
    box
      .css('z-index', 10)
      .velocity("transition.bounceDownOut", 1000)
    wrraper.velocity({ height: 0 }, 500)

    setTimeout(function(){
      button.remove();
      buttons.addClass('hide');
      buttonsMy.parent().removeClass('hide')
      box
        .appendTo('#my-decision')
        .wrap('<div class="panel-wrraper"></div>')
        .velocity("transition.fadeIn", 500)

      backToDecision(box)
      myDecision(box)
// new div action for handle
      count = count + 1
      console.log(count)
      if (count == 1){
        div1.prependTo('#sticky-content').velocity("transition.fadeIn", 1000)
      } if (count == 2) {
        div2.prependTo('#sticky-content').wrap('<div class="panel-wrraper"></div>')
      .velocity("transition.fadeIn", 1000)
        $('.header-section, .header-section h5').slideUp()
        $('.section-break').slideUp()
      }
    }
    , 500);
  })
}
decision(decisions)

function ex(el){
  el.on('click', '.si-icon.si-icon-ex-plus.move-panel', function(){
    var button = $(this).parent()
      box = button.parent()
      wrraper = box.parent()
      wrraperHeight = wrraper.outerHeight()
    $(this).off();
    box.off('click', '.button-decision button')
    wrraper.css('height', wrraperHeight);
    box
      .css('z-index', 10)
      .velocity("transition.bounceDownOut", 1500);
    wrraper.velocity({ height: 0 }, 1000);
    setTimeout(function(){
      button.hide();
      box.appendTo('#my-decision')
        .wrap('<div class="panel-wrraper"></div>')
        .velocity("transition.fadeIn", 500)
    }
    , 1000);
    myDecision(box)
    });
}
ex(decisions)

});
