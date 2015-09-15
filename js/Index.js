var main = function() {
  $('#views').click(function() {
    var post = $('.boxy').val();
    $('<li>').text(post).prependTo('.views').addClass('view');
      $('.boxy').val('');
  });
};
$(document).ready(main);
