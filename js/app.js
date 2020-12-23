// Global variables for time, age, and creating a new pet
let timer = 0;
let age = 0;
let newPet = null;
let feedTimer = 0;
let sleepinessTimer = 0;
let boredomTimer = 0;

// Update timer and age during game
function renderStats() {
  $("#timer").text(`Time: ${timer}`);
  $("#age").text(`Age: ${age}`);
  $("#feedtimer").text(`Feed Me: ${feedTimer}`);
  $("#sleeptimer").text(`I'm Sleepy: ${sleepinessTimer}`);
  $("#playtimer").text(`I'm Bored: ${boredomTimer}`);
}

// Counter function to increment age of character and time duration played
function startTimer() {
  const counter = setInterval(function() {
    timer++;
    if(timer % 8 === 0){
      age++;
    }
    if(timer % 10 === 0) {
      feedTimer++;
    }
    if(timer % 20 === 0) {
      sleepinessTimer++;
    }
    if(timer % 30 === 0) {
      boredomTimer++;
    }
    // if (feedTimer || sleepinessTimer || boredomTimer == 2) {
    //   alert('GAME OVER! =(');
    // } 
      renderStats();
  }, 1000);
}

// Main tamagotchi class
class Tamagotchi {
  constructor(hunger, sleepiness, boredom) {
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
  }
};

// Start game function to begin playing
const startGame = $("#start");
$(startGame).on('click', function() {
  newPet = new Tamagotchi();
  console.log(newPet);
  startTimer();
});

// Button handlers to decrement values on click
const feedMeBtn = $("#feedme");
$(feedMeBtn).on('click', function() {
  feedTimer--;
});

const playBtn = $("#play");
$(playBtn).on('click', function() {
  boredomTimer--;
});

const sleepBtn = $("#sleep");
$(sleepBtn).on('click', function() {
  sleepinessTimer--;
})




