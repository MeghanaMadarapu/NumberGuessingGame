document.querySelector('#start-game').addEventListener('click', function() {
    const max = document.querySelector('#max-range').value;
    const randm = Math.floor(Math.random() * max) + 1;
    let guess = prompt("Guess the Number");
    const messageDiv = document.querySelector('#message');

    while(true){
        if(guess == "quit"){
            messageDiv.textContent = "User Quit...";
            break;
        }
        if(guess == randm){
            messageDiv.textContent = "Congratulations! You guessed it right. Random number was " + randm;
            break;
        }
        //HINT
        else if(guess < randm){
            guess = prompt("HINT: your guess is SMALL, Try Again!");
        }
        else{
            guess = prompt("HINT: your guess is LARGE, Try Again!");
        }
    }
});
