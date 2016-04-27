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
  $('.glyphicon-ok').show();
});




// $('.expect-list').click(function(event){
// $(this).siblings('ol').slideDown();
// $(.this).siblings('.glyphicon-ok').show();
// });
