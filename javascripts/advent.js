var main = function () {
  $('.number').click(function () {
    $(this).fadeOut();
    $(this).siblings().fadeIn();
  });
  $('.early').click(function () {
    alert("It's too early for that day!");
  });
};
$(document).ready(main);
