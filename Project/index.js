$(document).ready(function(){
  $(".open").click(function(){
    let $child = $(this).find("i.fas"); 
    $child.toggleClass("fa-bars").toggleClass("fa-times");
    $(".menu").toggle();
  });
});

// $( "menu" ).last().addClass( "selected" );
