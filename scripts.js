const mainDiv = $('#main-div');
let dieBtn = $('#die-button');
let rollBtn = $('#roll-button');
let sumButton = $('#sum-dice');


dieBtn.click(() => {
    let createDie = new Die(randomNum()); //adds a new instance of the class Die with random number on every button click.

});

let randomNum = (min, max) => { //random number generating function for use throughout code
    min = 1;
    max = 7;
    return Math.floor(Math.random() * (max - min) + min);

}

class Die { //OOP class Die.
    constructor(die) {
        this.die = die;
        this.div = $(`<div class=dice>${this.die}</div>`);
        this.div.appendTo('#dice-div'); //appends a new div for every instance created.
        rollBtn.click(() => { //calls the roll method on button click
            this.roll();
            
        });
        
    }

    roll() { //
        this.div.text(randomNum()); //changes die number to random number for any dice on the screen at that time when roll dice button is clicked.
    }
}

sumButton.click(() => {
    sumDice();

});

function sumDice() {
    let diceVals = $('.dice').text().split("");
    let numbers = [];
    for(i = 0; i < diceVals.length; i++){
        numbers.push(parseInt(diceVals[i]));
        console.log(numbers);// possibly use the array.reduce method now that i have a way of capturing the values of the dice divs in an array and converting them to numbers.
    }
    //console.log(diceVals);
    
}
