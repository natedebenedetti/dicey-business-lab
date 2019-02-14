const mainDiv = $('#main-div');
let dieBtn = $('#die-button');
let rollBtn = $('#roll-button');

dieBtn.click(function() {
    let createDie = new Die(randomNum()); //adds a new instance of the class Die with random number on every button click.
    
});

function randomNum(min, max) { //random number generating function for use throughout code
    min = 1;
    max = 7;
    return Math.floor(Math.random() * (max - min) + min);

}

class Die { //OOP class Die.
    constructor(die) {
        this.die = die;
        this.div = $(`<div class=dice>${this.die}</div>`) 
        this.div.appendTo('#dice-div'); //appends a new div for every instance created.
        rollBtn.click( () => { //calls the roll method on button click
            this.roll();
            
        })
    }

    roll() { //
        this.div.text(randomNum()); //changes die number to random number for any dice on the screen at that time when roll dice button is clicked.
    }
}

