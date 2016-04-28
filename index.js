$(document).ready(function() {
  console.log('Ready!');
});

$('.hide, #moreresults').hide();

$('#moreresultslink').click(function(event) {
  console.log(event);
  $('#moreresults').slideDown();
  $(this).hide();
});

$('.expect-list').click(function(event){
  //$(this).siblings('ol').slideDown();
  $(this).siblings('ol').show();
  $(this).children('.check').show();
  // $('.check').show();
});



