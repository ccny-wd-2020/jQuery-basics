/*
  jQuery Basics:
    * Through jQuery, you can:
      - add an event (i.e. click, hover, on key press) to any html element
      - change the css of any html element
      - add, move, remove, update html elements on the dom
      - change the text in html elements
      - add and change properties of an html element
    * To access an html element in your jQuery, you do $("<tag, class, id>")
    * Then you attach a jQuery function to that selected element
*/

//adding a click event to an element with an id of 'name-p'
$('#name-p').click(function(){
  //execute the logic inside of the function once the element with id of 'name-p' has been clicked
  //the only logic here once '#name-p' has been clicked is to alert 'hello'
  alert("hello");
});

//adding a click event to an element with an id of 'hide-jared button'
$('#hide-jared-button').click(function(){
  //once '#hide-jared-button' is clicked
  //execute the logic inside of the click event
  //which is to hide an element with an id of 'name-p'
  $('#name-p').hide();
});

//adding a click event to an element with an id of 'show-jared button'
$('#show-jared-button').click(function(){
  //once '#show-jared-button' is clicked
  //execute the logic inside of the click event
  //which is to show an element with an id of 'name-p'
  $('#name-p').show();
});

/*
  You can set css of html elements in your javascript
*/

//all p tags with a font color of red
//this being in the global scope (meaning it's not surrounded/encapsulated by an event), it will happen on page load
$("p").css("color", "red");
//you can attach as many functions in a line as you want
//here, for the html element with id of 'show-jared-button' on the page, set the color of blue and background-color of yellow
$("#show-jared-button").css("color", "blue").css("background-color", "yellow")
//here, for all of the html elements with a class of 'buttons', set display to inline-grid
$(".buttons").css("display", "inline-grid");
//give all of the buttons on the page some space
$("button").css("margin", "5px");

/*
  You can change the text of an element
*/
//accessing an element with an id of 'changing-text'
//changing the text of an element with an id of 'changing-text'
$("#changing-text").text("This text has changed");

/*
  You can add text to an empty element
*/
//accessing an element with an id of 'hover-header'
//adding text to an element with an id of 'hover-header'
$("#hover-header").text("On Hover Event & Adding Elements via jQuery")

/*
  You can add an html element to the dom via jQuery
*/
//creating a span element and storing it in a variable
var span = $("<span>");
//adding text to that newly created span element
span.text("Added this element via jQuery");
//accessing element(s) with a class of 'changing-and-adding-elements'
//adding/appending the previously created span element to the 'changing-and-adding-elements' class
$('.changing-and-adding-elements').append(span);

/*
  Hover Event and adding elements
*/
//accesing the element with an id of 'nirvana-nevermind-header'
//attaching a hover/mouseenter event to the element with an id of 'nirvana-nevermind-header'
$("#nirvana-nevermind-header").mouseenter(function(){
  //creating an image element and storing it in a variable
  var nirvanaImage = $("<img>");
  //adding src attribute to the newly created image
  nirvanaImage.attr("src", "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg");
  //giving the image some css properties
  nirvanaImage.css("height", "250px").css("width", "250px")

  //accessing the element(s) with a class of 'hover-elements'
  //adding/appending the previously created image element to the 'hover-elements' class
  $('.hover-elements').append(nirvanaImage)
});
