// Tamagotchi main class
let timer = 0;
let age = 0;
let newPet = null;

function renderStats() {
  $("#timer").text(`Time: ${timer}`);
  $("#age").text(`Age: ${age}`);
}

function startTimer() {
  const counter = setInterval(function() {
    timer++;
    age++;
    renderStats();
  }, 1000);
}

class Tamagotchi {
  constructor(hunger, sleepiness, boredom) {
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
  }
};


const startGame = $("#start");
$(startGame).on('click', function() {
  newPet = new Tamagotchi();
  console.log(newPet);
  startTimer();
});



