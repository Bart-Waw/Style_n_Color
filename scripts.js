$('#menu_button').on('click', function () {
    $('#navigation').slideToggle();
});

$('#go-to-page1').on('click', function () {
    $('#title').html('Style & Color');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_3').hide();
    $('#page_4').hide();
    $('#page_5').hide();
    $('#page_1').fadeIn();
});

$('#go-to-page2').on('click', function () {
    $('#title').html('Style');
    $('#navigation').slideUp();
    $('#page_1').hide();
    $('#page_3').hide();
    $('#page_4').hide();
    $('#page_5').hide();
    $('#page_2').fadeIn();
});

$('#go-to-page3').on('click', function () {
    $('#title').html('Color');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_1').hide();
    $('#page_4').hide();
    $('#page_5').hide();
    $('#page_3').fadeIn();
});

$('#go-to-page4').on('click', function () {
    $('#title').html('Match');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_3').hide();
    $('#page_1').hide();
    $('#page_5').hide();
    $('#page_4').fadeIn();
});

$('#go-to-page5').on('click', function () {
    $('#title').html('Saved');
    $('#navigation').slideUp();
    $('#page_2').hide();
    $('#page_3').hide();
    $('#page_4').hide();
    $('#page_1').hide();
    $('#page_5').fadeIn();
});