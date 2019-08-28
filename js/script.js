console.log('my script is working');

$(document).ready(function(){

  $( function() {
    $( "#menu" ).menu();
  } );

  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

  $( function() {
    $( "#accordion" ).accordion();
  } );

  $( "button" ).button();

  $( "#progressbar" ).progressbar({
    value: false
  });

  $( "#spinner" ).spinner();
} );
