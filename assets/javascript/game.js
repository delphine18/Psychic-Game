
   
    var letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wins = 0;
    var losses = 0;
    var guessesleft = 9;
    var guessed = [];

   
   
    document.onkeyup = function(event) {

    var userPick = event.key;
    var computerPick = letters[Math.floor(Math.random() * letters.length)];
    guessed.push(userPick);

    var reset = function(){
    guessesleft = 9;
    guessed = [];
   
    }

      if (userPick === computerPick){
          wins++;
          reset();        
      } 
      else{
        guessesleft--; 

      }
      if(guessesleft ===0){
        losses++;
        reset(); 
      }
     

    var html =
      "<h2>The Psychic Game</h2>" +
      "<p>Guess what letter I'm thinking of<p>" +
      "<p>The computer chose: " + computerPick + "</p>"+
      "<p>You chose: " + userPick + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses left: " + guessesleft + "</p>" +
      "<p>Your guesses so far: " + guessed + "</p>";
      
    document.querySelector("#game").innerHTML = html;
  };
      
   
   