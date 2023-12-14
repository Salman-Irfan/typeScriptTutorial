"use strict";
class Player {
    // private height;
    // weight;
    // protected power?: number;
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => {
            return this.height;
        };
    }
}
// instance of Player class
const player1 = new Player(6, 70);
player1.weight = 100;
console.log(player1.weight);
console.log(player1.getMyHeight());
// inheritance / protected
class SpecialPlayer extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        // accessing protected properties
        this.getMyPower = () => {
            return this.power;
        };
        this.special = special;
    }
}
const specialPlayer2 = new SpecialPlayer(7, 80, 9999, true);
console.log(specialPlayer2.getMyPower());
