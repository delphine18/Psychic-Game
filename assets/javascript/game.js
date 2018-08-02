
   
    var letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wins = 0;
    var losses = 0;
    var guessesleft = 9;
    var guessed = [];

   
   
    document.onkeyup = function(event) {

    var userPick = event.key;
    guessed.push(userPick);

    var computerPick = letters[Math.floor(Math.random() * letters.length)];

    var reset = function(){
    guessesleft = 9;
    guessed = [];
   
    }

      if (userPick === computerPick){
          wins++;
          reset();        
      } 
      else {
        guessesleft--; 
      }

      if(guessesleft ===0){
        losses++;
        reset(); 
        
      }
        var html =
        "<p>The computer chose: " + computerPick + "</p>"+
          "<p>You chose: " + userPick + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesleft + "</p>" +
          "<p>Your guesses so far: " + guessed + "</p>";
          
        document.querySelector("#game").innerHTML = html;
      };
      
   
   