// Image 1
var imageNumber1 = Math.round(Math.random() * 2);

var imageGame1 = "images/hand" + imageNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageGame1);

// Image 2

var imageNumber2 = Math.round(Math.random() * 2);

var imageGame2 = "images/hand" + imageNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageGame2)

// Results
if (imageNumber1 === 0 && imageNumber2 === 1 ){
             document.querySelector("h3").innerHTML = "🍀Player 1 wins!🍀"
}
else if (imageNumber1 === 0 && imageNumber2 === 2 ) {
             document.querySelector("h3").innerHTML = "🍀Player 2 wins!🍀"
  }else if (imageNumber1 === 1 && imageNumber2 === 2 ){
              document.querySelector("h3").innerHTML = "🍀Player 2 wins!🍀"
    }else if (imageNumber1 === 1 && imageNumber2 === 0 ){
                document.querySelector("h3").innerHTML = "🍀Player 2 wins!🍀"
      }else if (imageNumber1 === 2 && imageNumber2 === 0 ){
                  document.querySelector("h3").innerHTML = "🍀Player 1 wins!🍀"
        }else if (imageNumber1 === 2 && imageNumber2 === 1 ){
                    document.querySelector("h3").innerHTML = "🍀Player  wins!🍀"
                  }else {
                    document.querySelector("h3").innerHTML = "♡ Draw! ♡"
                  }

                  //
                  // if (randomNumber1 > randomNumber2) {
                  //   document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
                  // }
                  // else if (randomNumber1 < randomNumber2) {
                  //   document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
                  // } else {
                  //   document.querySelector("h1").innerHTML = "Draw!"
                  // }


// IDEAS
// document.querySelector("h1").innerHTML = "Who Will" + what + "?";

//
// document.querySelector("h2")[0].innerHTML = upperCase(player1);
// document.querySelector("h2")[1].innerHTML = upperCase(player2);
