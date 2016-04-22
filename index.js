$(document).ready(function() {
  console.log('Ready!');
});

$('.hide, #moreresults').hide();

$('#moreresultslink').click(function(event) {
  console.log(event);
  $('#moreresults').slideDown();
  $(this).hide();
});

$('.col-md-4 what-to-expect').click(function(event){
  //$(this).siblings('ol').slideDown();
  $(this).siblings('ol').show();
});
