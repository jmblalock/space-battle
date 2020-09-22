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
                console.log(`Alien has ${target.hull} hull remaining`);
            } else {
                console.log(`You MISSED the alien!!!`)
            }
        } else {
            fleet = [];
            console.log('Game Over');
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
                console.log('An Alien is attacking you!');
                console.log('The alien HIT you!!!');
                console.log(`Alien did ${this.firepower} damage`);
                console.log(`You have ${target.hull} hull remaining`);
            } else {
                console.log(`The alien MISSED you!!!`)
            }
        } else {
            fleet.splice(0,1)
        }
    }
}

class Game {
    constructor() {

    }
    optionPrompt() {
        let answer = prompt("'attack' the next ship or 'retreat'?");

        if (answer === 'attack') {
            round++;
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
            
        } else if (alien.hull <= 0) {
            console.log(`${alien.name} ${fleet.length} went kabloo-ey!`);
            this.optionPrompt();
        }
    }
}


const game = new Game();
const uss_assembly = new Ship();
const alien = new Alien();
let round = 1;
let fleet = createFleet(6);

for (let i = 0; i < fleet.length; i++) {
    console.log('round is: ' + round);
    console.log('aliens remaning: ' + fleet.length);
    uss_assembly.attack(fleet[i]);
    alien.attack(uss_assembly);
    game.checkWin(uss_assembly, fleet[i]);
}