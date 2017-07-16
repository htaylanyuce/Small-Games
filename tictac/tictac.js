var counter = 1;
var array = new Array(9);
var pos1 = [1,0,1,1,0,1,1,0,1];
var pos2 = [1,1,1,0,0,0,1,1,1];


$(document).ready(function() {

  $("table").click(function(event) {


    if(counter % 2 == 1)
    {
      array[parseInt(event.target.id) - 1] = 1;
      var text = $(event.target).text();
      if(text != 'o')
      {
        var text = $(event.target).text('x');

      }
    }
    else {
      array[parseInt(event.target.id) - 1] = 0;
      var text = $(event.target).text();
      if(text != 'x')
      {
        var text = $(event.target).text('o');

      }
    }

    if(isEnded(array))
    {
      $("p:last-child").css('visibility','visible');
      setInterval(function(){  location.reload();  }, 1500);

    }

    counter++;

    if(counter == 10)
    {
      $("p:last-child").css('visibility','visible');
      setInterval(function(){  location.reload();  }, 1500);

     }
  });


  function isEnded(array)
  {
      var innerCounter = false;

      /* X O X
         X O X
         X O X*/

      innerCounter = pos1[0] == array[0] && pos1[1] == array[1] && pos1[2] == array[2];
      if(innerCounter)
      {
        return true;
      }

      innerCounter = pos1[3] == array[3] && pos1[4] == array[4] && pos1[5] == array[5];
      if(innerCounter)
      {
        return true;
      }

      innerCounter = pos1[6] == array[6] && pos1[7] == array[7] && pos1[8] == array[8];
      if(innerCounter)
      {
        return true;
      }

      /* X X X
         O O O
         X X X*/

      innerCounter = pos2[0] == array[0] && pos2[3] == array[3] && pos2[6] == array[6];
      if(innerCounter)
      {
        return true;
      }

      innerCounter = pos2[1] == array[1] && pos2[4] == array[4] && pos2[7] == array[7];
      if(innerCounter)
      {
        return true;
      }

      innerCounter = pos2[2] == array[2] && pos2[5] == array[5] && pos2[8] == array[8];
      if(innerCounter)
      {
        return true;
      }
      /* X - X
         - O -
         X - X*/

      innerCounter = pos2[0] == array[0] && pos2[4] == array[4] && pos2[8] == array[8];
      if(innerCounter)
      {
        return true;
      }

      innerCounter = pos2[2] == array[2] && pos2[4] == array[4] && pos2[6] == array[6];
      if(innerCounter)
      {
        return true;
      }




  }


});
