$(function() {
  $('div.card-body').click(function() {
    $('img').remove('#BAIT');
    $('.card-body').append('<iframe id="REACTION" width="100%" src="https://www.youtube.com/embed/CO7zNaRUC7M?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
  });
});
