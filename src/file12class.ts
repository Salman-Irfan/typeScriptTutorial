class Player {
    private height;
    weight;
    constructor(height: number, weight: number){
        this.height = height;
        this.weight = weight;
    }
    myHeight = () => {
        return this.height
    }
}
// instance of Player class
const player1 = new Player(6,70)
player1.weight = 100
console.log(player1.weight)
console.log(player1.myHeight())