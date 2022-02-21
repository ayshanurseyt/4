$(document).ready(function(){

    $('h1:first').slideUp(500).slideDown(500)


    $('#img').click(function(){
        $(this).fadeOut(500, function(){
            $(this).attr('src', 'images/imgwork1.jpg').fadeIn(500);
        })        
     });

    
     $('h2').mouseenter(function(){
         $(this).css('border' , 'solid 3px blue')
     });
     $('h2').mouseleave(function(){
        $(this).css('border' , 'solid 3px white')
    });
});