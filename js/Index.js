var main = function () {
    $('.counter').text('140');
    $('#submit').addClass('disabled');
    $('#submit').click(function () {
        var text = $('#listbox').val();
        $('<li>').text(text).prependTo('.list').addClass('listitem-active listitem').end()
            .siblings().removeClass('listitem-active');
        $('<span class="glyphicon glyphicon-floppy-remove btn" id="minus">').appendTo('.listitem-active');
        $('#listbox').val('');
        $('.counter').text('140');
        $('#submit').addClass('disabled');
        $('.btn').click(function () {
            $(this).hide();
            $(this).parent().hide();
        });
    });
    $('#listbox').keyup(function () {
        var listlength = $(this).val().length;
        var listleft = 140 - listlength;
        $('.counter').text(listleft);
        if (listleft == 140) {
            $('#submit').addClass('disabled');
        } else if (listleft < 0) {
            $('#submit').addClass('disabled');
        } else {
            $('#submit').removeClass('disabled');
        }
    });
};
$(document).ready(main);
