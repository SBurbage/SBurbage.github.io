/* Requires jQuery*/
var main = function() {
  function plus(i) {
    if (i > 10) {
      i = i - 12;
    }
    return i;
  }
  var d = new Date();
  var h = plus(d.getHours());
  var m = d.getMinutes();
  var s = d.getSeconds();
  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m / 2;
  $('.seccon').css('transform', 'rotateZ(' + sAngle + 'deg)');
  $('.mincon').css('transform', 'rotateZ(' + mAngle + 'deg)');
  $('.hrcon').css('transform', 'rotateZ(' + hAngle + 'deg)');
};

$(document).ready(main);
