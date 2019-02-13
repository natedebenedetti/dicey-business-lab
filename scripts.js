const mainDiv = $('#main-div');
let dieBtn = $('#die-button');

dieBtn.click(function () {
    for(i = 1; i < 6; i++) { //added to specify a number of die to be placed on the screen (comparable to the game yahtzee).
    let d = new Die(randomNum()); //adds a new instance of the class Die
    }
    
});

function randomNum(min, max) { //random number generating function for use throughout code
    min = 1;
    max = 7;
    return Math.floor(Math.random() * (max - min) + min);

}

class Die { //OOP class Die.
    constructor(die) {
        this.die = die;
        this.div = $(`<div class=dice>${this.die}</div>`).appendTo('#dice-div'); //appends a new div for every instance created.
        
    }
}