var box1 = {};
var box2 = {};
var box3 = {};

box1.red = Math.floor((Math.random() * 255) + 1);
box1.green =  Math.floor((Math.random() * 255) + 1);
box1.blue =  Math.floor((Math.random() * 255) + 1);

box2.red = Math.floor((Math.random() * 255) + 1);
box2.green =  Math.floor((Math.random() * 255) + 1);
box2.blue =  Math.floor((Math.random() * 255) + 1);

box3.red = Math.floor((Math.random() * 255) + 1);
box3.green =  Math.floor((Math.random() * 255) + 1);
box3.blue =  Math.floor((Math.random() * 255) + 1);

var str1 = 'rgb('+box1.red+','+box1.green+','+box1.blue+')';
var str2 = 'rgb('+box2.red+','+box2.green+','+box2.blue+')';
var str3 = 'rgb('+box3.red+','+box3.green+','+box3.blue+')';

var congrats = ['Oh you are my man!', 'Good boy!', 'Yeah man, awesome'];
var fail = ['Come again','Go and learn how to play','This is the place for oldies ;)']

$(document).ready(function() {

  setInterval(function(){  location.reload();  }, 5000);

  $(".box1").css("background-color",str1);
  $(".box2").css("background-color",str2);
  $(".box3").css("background-color",str3);

  var whichDiv = Math.floor((Math.random() * 3) + 1);
  var guess;

  if(whichDiv == 1)
  {
    $("body p:nth-child(2)" ).html(str1);
  }
  else if(whichDiv == 2)
  {
    $("body p:nth-child(2)" ).html(str2);
  }
  else {
    $("body p:nth-child(2)" ).html(str3);
  }

  $( ".box1" ).click(function(e) {
    guess = 1;
    isDone(whichDiv,guess);
    });
  $( ".box2" ).click(function(e) {
    guess = 2;
    isDone(whichDiv,guess);
    });
  $( ".box3" ).click(function(e) {
    guess = 3;
    isDone(whichDiv,guess);
    });

  function isDone(whichDiv,guess)
  {
    var response = Math.floor((Math.random() * 3) + 1);

    if(whichDiv == guess)
    {
      $("body p:nth-child(3)" ).html(congrats[response-1]);
      $("body p:nth-child(3)" ).css("background-color","green");
      setInterval(function(){  location.reload();  }, 700);


    }
    else {
      $("body p:nth-child(3)" ).html(fail[response-1]);
      $("body p:nth-child(3)" ).css("background-color","red");
      setInterval(function(){  location.reload();  }, 700);


    }
  }



});
