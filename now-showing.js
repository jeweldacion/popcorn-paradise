const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow']
const  colors = COLORS_ARRAY.join(', ');

function runGame() {
        let guess = '';
        let correct = false;
        let numTries = 0

        const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
        const target = COLORS_ARRAY[targetIndex]
        console.log('The target is ' + target);

        do {
            guess = prompt('I am thinking of one of these colors:\n\n' + colors +
'\n\nWhat color am I thinking of?\n').toLowerCase();
            numTries++
            if(guess === null) {
                alert('Game terminated');
                return;
            }
            correct = checkGuess(guess, target)
        } while(!correct);
        alert(`Congratulations! You guessed the right color! You did (${numTries}) number  of tries!`)


        document.body.style.background = guess 
    }

function checkGuess(guess, target) {
    const sorryMsg = 'Sorry, your guess is incorrect.';
    const tryMsg = 'Please try again.';
    let correct = false;
    if (!COLORS_ARRAY.includes(guess)) {
        alert (`Sorry, I don't recognize your color. ${tryMsg}`);
    } else if (guess > target) {
        alert (`${sorryMsg} Color: ${guess} is not the color that I'm looking for.  ${tryMsg}`)
    } else if (guess < target) {
        alert (`${sorryMsg} Color: ${guess} is not the color. You can do better than that. ${tryMsg}`)
    } else {
        correct = true;
    }
    return correct
}