$(document).ready(function(){
    $('.menu .fa-bars').click(function (){
        $(this).toggleClass('far fa-times');
        $('nav').toggleClass('toggle');
    })

});