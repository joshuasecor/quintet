// Hero Image - Parallax Scroll //

$(document).ready(function() {
  $(window).scroll(function(e) {
    var s = $(window).scrollTop(),
      marginVal = (s / (-5));
    $('.hero').css('margin-top', marginVal);
  });
});