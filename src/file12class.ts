class Player {
    // private height;
    // weight;
    // protected power?: number;
    constructor(
        private height: number,
        public weight: number,
        protected power?: number
    ) {}
    getMyHeight = () => {
        return this.height;
    };
}
// instance of Player class
const player1 = new Player(6, 70);
player1.weight = 100;
console.log(player1.weight);
console.log(player1.getMyHeight());

// inheritance / protected
class SpecialPlayer extends Player {
    special: boolean;
    constructor(height:number, weight:number , power: number, special: boolean){
        super(height, weight, power)
        this.special = special
    }
    // accessing protected properties
    getMyPower=()=>{
        return this.power
    }
}

const specialPlayer2 = new SpecialPlayer(7,80, 9999, true)
console.log(specialPlayer2.getMyPower())