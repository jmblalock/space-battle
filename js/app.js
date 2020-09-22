function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function createFleet(num) {
    let alienArr = [];
    for (let i = 0; i < num; i++) {
        alienArr.push(new Alien());
    }
    return alienArr;
}

class Ship {
    constructor() {
        this.name = 'uss_assembly';
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    attack (target) {
        if (this.hull > 0) {
            if (Math.random() < this.accuracy) {
                target.hull -= this.firepower;
                console.log('You are attacking an alien!');
                console.log('You HIT the alien!!!');
                console.log(`You have done ${this.firepower} damage`);
                console.log(`The alien has ${target.hull} hull remaining`);
            } else {
                console.log(`You MISSED the alien!!!`)
            }
        }
    }
}

class Alien {
    constructor() {
        this.name = 'alien'
        this.hull = Math.floor(randomNumber(3, 6));
        this.firepower = Math.floor(randomNumber(2, 4));
        this.accuracy = randomNumber(.6, .8);
    }
    attack (target) {
        if (this.hull > 0) {
            if (Math.random() < this.accuracy) {
                target.hull -= this.firepower;
                console.log('An alien is attacking you!');
                console.log('The alien HIT you!!!');
                console.log(`The alien did ${this.firepower} damage`);
                console.log(`You have ${target.hull} hull remaining`);
            } else {
                console.log(`The alien MISSED you!!!`)
            }
        }
    }
}

class Game {
    constructor() {

    }
    optionPrompt() {
        let answer = prompt("'attack' the next ship or 'retreat'?");

        if (answer === 'attack') {
            console.log('--------------------');
        } else if (answer === 'retreat') {
            fleet = [];
            console.log('Game Over');
        }
    }
    runGame() {
        
    }
    checkWin(ship, alien) {
        if (ship.hull <= 0) {
            console.log(`${ship.name} went kabloo-ey...`);
            fleet = [];
            console.log('Game Over');
        } else if (alien.hull <= 0) {
            console.log(`The ${alien.name} went kabloo-ey!`);
            fleet.splice(0, 1);
            if(fleet.length > 0) {
                console.log('Aliens remaining: ' + fleet.length);
                this.optionPrompt();
            } else {
                console.log('Victory!');
                return;
            }
        }
    }
}

const game = new Game();
const uss_assembly = new Ship();
const alien = new Alien();

let aliens = 20
let fleet = createFleet(aliens);

while(fleet.length != 0) {
    uss_assembly.attack(fleet[0]);
    fleet[0].attack(uss_assembly);
    game.checkWin(uss_assembly, fleet[0]);
}