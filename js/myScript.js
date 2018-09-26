$(document).ready(function() {
  $('div.card-body').click(function() {
    $('img').remove('#BAIT');
    $('.card-body').append('<iframe id="REACTION" width="100%" height="360px" src="https://www.youtube.com/embed/CO7zNaRUC7M?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
  });
  $('button#GREEN').click(function() {
    if($('*:not(.card) + *:not(.card>*)').hasClass('green-bg'))
    {
      $('*:not(.card) + *:not(.card>*)').removeClass('green-bg');
    }
    else {
      $('*:not(.card) + *:not(.card>*)').removeClass('blue-bg');
      $('*:not(.card) + *:not(.card>*)').removeClass('red-bg');
      $('*:not(.card) + *:not(.card>*)').addClass('green-bg');
    }
  });
  $('button#RED').click(function() {
    if($('*:not(.card) + *:not(.card>*)').hasClass('red-bg'))
    {
      $('*:not(.card) + *:not(.card>*)').removeClass('red-bg');
    }
    else {
      $('*:not(.card) + *:not(.card>*)').removeClass('blue-bg');
      $('*:not(.card) + *:not(.card>*)').removeClass('green-bg');
      $('*:not(.card) + *:not(.card>*)').addClass('red-bg');
    }
  });
  $('button#BLUE').click(function() {
    if($('*:not(.card) + *:not(.card>*)').hasClass('blue-bg'))
    {
      $('*:not(.card) + *:not(.card>*)').removeClass('blue-bg');
    }
    else {
      $('*:not(.card) + *:not(.card>*)').removeClass('green-bg');
      $('*:not(.card) + *:not(.card>*)').removeClass('red-bg');
      $('*:not(.card) + *:not(.card>*)').addClass('blue-bg');
    }
  });
});
