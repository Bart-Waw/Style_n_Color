$('#menu_button').on('click', function () {
    $('#navigation').slideToggle();
});

$('#go-to-page1').on('click', function () {
    $('#nav-left').html('');
    $('#title').html('Style & Color');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_3').hide();
    $('#page_4').hide();
    $('#page_5').hide();
    $('#page_1').fadeIn();
});

$('#go-to-page2').on('click', function () {
    $('#nav-left').html('');
    $('#title').html('Style');
    $('#navigation').slideUp();
    $('#page_1').hide();
    $('#page_3').hide();
    $('#page_4').hide();
    $('#page_5').hide();
    $('#page_2').fadeIn();
});

$('#go-to-page3').on('click', function () {
    $('#nav-left').html('<div><</div>');
    $('#title').html('Color');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_1').hide();
    $('#page_4').hide();
    $('#page_5').hide();
    $('#page_3').fadeIn();
});

$('#go-to-page4').on('click', function () {
    $('#nav-left').html('<div><</div>');
    $('#title').html('Match');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_3').hide();
    $('#page_1').hide();
    $('#page_5').hide();
    $('#page_4').fadeIn();
});

$('#go-to-page5').on('click', function () {
    $('#nav-left').html('<div class="plus_button" id="save_button"><div>+</div></div>');
    $('#title').html('Saved');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_3').hide();
    $('#page_4').hide();
    $('#page_1').hide();
    $('#page_5').fadeIn();
});



// TESTING
/*
$('#page_4_primary').on('click', function () {
    $('#shirt').css('fill', `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
});
*/

/*
$('#slider').on('change', function () {
    $('#shirt').css('fill', `hsl(${$('#slider').val()}, 80%, 50%)`); 
});

$('#page_4_secondary').on('click', function () {
    $('#pants').css('fill', `hsl(${$('#slider').val()}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%)`);
});
*/

$('#page_4_primary').on('click', function () {
    $('#page_4_main_color_choice').slideToggle();
});

$('.colorBoxMain').on('click', function () {
    $('#shirt').css('fill', $(this).css('background-color'));
    $('.colorBoxSecondary').show();
    if ($('#shirt').css('fill') !== $('#khaki').css('background-color')) {
        $('#khaki').hide();
    }
    if ($('#shirt').css('fill') !== $('#olive').css('background-color')) {
        $('#olive').hide();
    }
    if ($('#shirt').css('fill') !== $('#burgundy').css('background-color') 
    && $('#shirt').css('fill') !== $('#green').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_green').css('background-color')
    && $('#shirt').css('fill') !== $('#olive').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_brown').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_gray').css('background-color')
    && $('#shirt').css('fill') !== $('#khaki').css('background-color')
    ) {
        $('#burgundy').hide();
    }
    if ($('#shirt').css('fill') !== $('#beige').css('background-color')) {
        $('#maroon').hide();
    }
    if ($('#shirt').css('fill') !== $('#beige').css('background-color') 
    && $('#shirt').css('fill') !== $('#navy').css('background-color')
    && $('#shirt').css('fill') !== $('#light_pink').css('background-color')
    && $('#shirt').css('fill') !== $('#white').css('background-color')
    ) {
        $('#beige').hide();
    }
    if ($('#shirt').css('fill') === $('#tan').css('background-color') 
    || $('#shirt').css('fill') === $('#camel').css('background-color')
    || $('#shirt').css('fill') === $('#light_pink').css('background-color')
    || $('#shirt').css('fill') === $('#black').css('background-color')
    || $('#shirt').css('fill') === $('#light_gray').css('background-color')
    || $('#shirt').css('fill') === $('#dark_gray').css('background-color')
    ) {
        $('#navy').hide();
    }
    if ($('#shirt').css('fill') !== $('#dark_green').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_brown').css('background-color')
    ) {
        $('#dark_green').hide();
    }
    if ($('#shirt').css('fill') !== $('#burgundy').css('background-color') 
    && $('#shirt').css('fill') !== $('#green').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_green').css('background-color')
    && $('#shirt').css('fill') !== $('#olive').css('background-color')
    && $('#shirt').css('fill') !== $('#khaki').css('background-color')
    && $('#shirt').css('fill') !== $('#beige').css('background-color')
    ) {
        $('#brown').hide();
    }
    if ($('#shirt').css('fill') !== $('#navy').css('background-color') 
    && $('#shirt').css('fill') !== $('#light_pink').css('background-color')
    && $('#shirt').css('fill') !== $('#black').css('background-color')
    && $('#shirt').css('fill') !== $('#light_gray').css('background-color')
    ) {
        $('#light_pink').hide();
    }
    if ($('#shirt').css('fill') !== $('#pink').css('background-color') 
    ) {
        $('#pink').hide();
    }
    if ($('#shirt').css('fill') !== $('#beige').css('background-color') 
    && $('#shirt').css('fill') !== $('#tan').css('background-color')
    && $('#shirt').css('fill') !== $('#vamel').css('background-color')
    && $('#shirt').css('fill') !== $('#light_pink').css('background-color')
    && $('#shirt').css('fill') !== $('#white').css('background-color')
    ) {
        $('#tan').hide();
    }
    if ($('#shirt').css('fill') !== $('#navy').css('background-color') 
    && $('#shirt').css('fill') !== $('#beige').css('background-color')
    && $('#shirt').css('fill') !== $('#tan').css('background-color')
    && $('#shirt').css('fill') !== $('#camel').css('background-color')
    && $('#shirt').css('fill') !== $('#light_pink').css('background-color') 
    && $('#shirt').css('fill') !== $('#black').css('background-color')
    && $('#shirt').css('fill') !== $('#light_gray').css('background-color')
    && $('#shirt').css('fill') !== $('#white').css('background-color')
    ) {
        $('#light_blue').hide();
    }
    if ($('#shirt').css('fill') !== $('#burgundy').css('background-color')
    && $('#shirt').css('fill') !== $('#light_pink').css('background-color')
    && $('#shirt').css('fill') !== $('#light_gray').css('background-color')
    ) {
        $('#light_gray').hide();
    }
    if ($('#shirt').css('fill') !== $('#burgundy').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_gray').css('background-color')
    && $('#shirt').css('fill') !== $('#pink').css('background-color')
    ) {
        $('#dark_gray').hide();
    }
    if ($('#shirt').css('fill') !== $('#tan').css('background-color')
    && $('#shirt').css('fill') !== $('#camel').css('background-color')
    ) {
        $('#cream').hide();
    }
    if ($('#shirt').css('fill') !== $('#camel').css('background-color')
    ) {
        $('#camel').hide();
    }
    if ($('#shirt').css('fill') !== $('#dark_brown').css('background-color')
    ) {
        $('#dark_brown').hide();
    }
    if ($('#shirt').css('fill') !== $('#green').css('background-color')
    ) {
        $('#green').hide();
    }
    if ($('#shirt').css('fill') !== $('#red').css('background-color')
    ) {
        $('#red').hide();
    }
    if ($('#shirt').css('fill') === $('#pink').css('background-color')
    ) {
        $('#white').hide();
    }
    if ($('#shirt').css('fill') !== $('#burgundy').css('background-color') 
    && $('#shirt').css('fill') !== $('#red').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_brown').css('background-color')
    && $('#shirt').css('fill') !== $('#pink').css('background-color')
    && $('#shirt').css('fill') !== $('#black').css('background-color')
    && $('#shirt').css('fill') !== $('#dark_gray').css('background-color')
    && $('#shirt').css('fill') !== $('#white').css('background-color')
    ) {
        $('#black').hide();
    }
});

$('#page_4_secondary').on('click', function () {
    $('#page_4_secondary_color_choice').slideToggle();
});

$('.colorBoxSecondary').on('click', function () {
    $('#pants').css('fill', $(this).css('background-color'));
});