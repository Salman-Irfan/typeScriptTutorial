"use strict";
class Player {
    constructor(height, weight) {
        this.myHeight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
    }
}
// instance of Player class
const player1 = new Player(6, 70);
player1.weight = 100;
console.log(player1.weight);
console.log(player1.myHeight());
