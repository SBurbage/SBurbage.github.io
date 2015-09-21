var main = function () {
    $('#fill').click(function () {
        $('<div>').appendTo('#canvas').addClass('blob');
    });
    $('#clear').click(function(){
        $('#canvas').empty();
    });
};
$(document).ready(main);
