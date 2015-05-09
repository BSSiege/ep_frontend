$(document).ready(function(){
  $("#sticky-nav").sticky({topSpacing:80});

  $("#sticky-nav").mCustomScrollbar({
    autoHideScrollbar:true,
    theme:"rounded"
  });
});


$("#call-to-action").velocity("callout.tada", 500);