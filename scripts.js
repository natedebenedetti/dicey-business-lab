const mainDiv = $('#main-div');
let dieBtn = $('#die-button');

dieBtn.click(function () {
    for(i = 1; i < 7; i++) {
    let d = new Die(randomNum());
    }
    
});

function randomNum(min, max) {
    min = 1;
    max = 7;
    return Math.floor(Math.random() * (max - min) + min);

}

class Die {
    constructor(die) {
        this.die = die;
        this.div = $(`<div class=dice>${this.die}</div>`).appendTo('#dice-div');
        
    }
}