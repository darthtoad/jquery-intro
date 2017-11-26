$(document).ready(function() {
  $("h6").click(function() {
    alert("ME BE SILLY!!!!");
    $("img").fadeIn();
    $("img").slideUp();
    $("img").slideDown();
  })
  $("img").click(function() {
    $("img").fadeOut();
    $("img").fadeIn();
  })
})
