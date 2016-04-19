$(document).ready(function() {
  console.log('Ready!');
});

$('.hide, #moreresults').hide();

$('#moreresultslink').click(function(event) {
  console.log(event);
  $('#moreresults').slideDown();
  $(this).hide();
});

