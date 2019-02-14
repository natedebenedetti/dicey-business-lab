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
        // sumButton.click(() => {
        //     this.sumDice();
        // });
    }

    roll() {
        this.div.text(randomNum()); //changes die number to random number for any dice on the screen at that time when roll dice button is clicked.
    }


}


sumButton.click(() => {
    sumDice();

});

function sumDice() {
    let diceVals = $('.dice').text().split(""); //takes the innertext of the class dice and places it in an array of strings in the variable named diceVals.
    let numbers = []; //creates an empty array in the variable named numbers.
    for(i = 0; i < diceVals.length; i++){ //loops through the diceVals array
        numbers.push(parseInt(diceVals[i])); //at each location in the diceVals array it changes the value from a string to a number and push's it onto the numbers array.
        
    }
    function sum(total, num) { //function used by .reduce method to calculate the sum of all the dice on the screen
        return total + num;
    }
    alert(numbers.reduce(sum));// possibly use the array.reduce method now that i have a way of capturing the values of the dice divs in an array and converting them to numbers.
}
    //console.log(diceVals);


