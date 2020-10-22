/*

1. import jquery
2. make the image appear after you click the appropriate button
3. make the image larger after you click the appropriate button
4. make the image more transparent after you click the appropriate button
5. make the font color of the h2 tag to change to blue on click
6. When the approprite button is clicked, add onto the respective div with a p tag that has your name as text
7. Create text that makes the whole dom disappear except for that text when you hover over it

8. hover over a button and then have the text on that button change
9. hover over a button and then have another button appear
10. click on an input and have your name be the value in that input
11. click on a text area and have that text area disappear

*/
$("#button-pic").click(function(){
  $("#dl_img").show();
});

$("#button-pic-two").click(function(){
  $("#dl_img").css("height", "600px").css("width", "600px");
});

$("#button-pic-three").click(function(){
  $("#dl_img").css("opacity", "50%")
});

$("h2").click(function(){
  $("h2").css("color", "blue").css("background-color", "#c6de21")
});

var myNamePTag = $("<p>");
myNamePTag.text("Margaret");

$("#button-text").click(function(){
  $(".your-name-p-tag").append(myNamePTag);
});

$("#disappearing-p").hover(function(){
  $(".main-content").hide();
});

$("#hover-me-to-change-text-button").hover(function(){
  $("#hover-me-to-change-text-button").text("Text Has Been Changed")
});

$("#hover-me-to-change-text-button").mouseleave(function(){
  $("#hover-me-to-change-text-button").text("Original Text")
});

$("#hover-me-to-add-more-buttons").hover(function(){
  var button = $("<button>");
  button.text("Added Button");

  $(".stays-on-dom").append(button);
});

$("#my-name-input").click(function(){
  $("#my-name-input").val("Jared")
});

$("#disappearing-text-area").click(function(){
  $("#disappearing-text-area").hide();
});
