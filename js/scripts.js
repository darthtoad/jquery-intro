$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("Fuck shit this is a fuckin header man!")
  });

  $("p").click(function() {
    alert("This is a paragraph.");
    $("img").toggle();
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $("img").click(function() {
    alert("This is an image.");
  })
});
