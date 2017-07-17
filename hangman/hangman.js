var wordArray = ['exhausting','england',"annihilate","antiseptic","articulate","authoritative","benefactor","carcinogenic","censorious","chivalrous","collarbone","commendable","compendium","comprehensive","conclusive","conscientious"];

$(document).ready(function() {

  var index = Math.floor(Math.random()*wordArray.length);
  var word = wordArray[index];
  word = word.split('');
  var len = word.length;
  var letters = new Array(Math.floor(len/2)); //  what letters are chosen is held here
  var showedWord = new Array(word.length);
  var errCounter = 0;

  for(var i = 0; i < len ; i++)
  {
    showedWord[i] = '_';
  }

  for(var i = 0; i < len/2 ; i++)
  {
    letters[i] = Math.floor(Math.random()*word.length);
  }

  for(var i = 0 ;i < letters.length ;i++)
  {
    var tmp = word[letters[i]];
    showedWord[letters[i]] = tmp;
    $("#selectedWord").innerHTML=showedWord;

  }
  write(showedWord);

  // control the pressed key
  $( "body" ).keypress(function(event) {

    var newLetter;

    if (event.which >= 65 && event.which <= 90)
        newLetter = event.which + 32;

    else if (event.which >= 97 && event.which <= 122)
        newLetter = event.charCode;

    showedWord = checkLetter(String.fromCharCode(newLetter),showedWord);
    write(showedWord)

    });

   // check if the letter exist in the word
   function checkLetter(newLetter,showedWord)
   {
     var flag = 0;
     for(var i = 0; i < word.length ; i++)
     {
         if(word[i] == newLetter)
        {
          flag = 1;
          showedWord[i] = newLetter;
        }

     }
    if(word.join('') == showedWord.join(''))
    {
        document.getElementById("youWin").innerHTML = "You Win!!";
        document.getElementById("youWin").style.visibility = "visible";
        setInterval(function(){ $("#youWin").fadeToggle();}, 100);
        setTimeout(function(){ location.reload(); },2000);
    }
     if(flag == 0)
     {
       increaseError();
     }
    return showedWord;
   }

   // increase the error number
   function increaseError()
   {
     errCounter++;

     document.getElementById("error").innerHTML = "Hangman "+errCounter;

     if(errCounter == 6)
     {
       document.getElementById("youWin").innerHTML = "Lost!!!";
       document.getElementById("youWin").style.visibility = "visible";
       setTimeout(function(){ location.reload(); },500);
     }

   }
   // write the last version of the word
   function write(showedWord)
   {
     showedWord = showedWord.join("");
     document.getElementById("selectedWord").innerHTML = showedWord;

   }


});
