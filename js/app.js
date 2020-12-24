// Global variables for time, age, and creating a new pet
let timer = 0;
let age = 0;
let newPet = null;
let petName = null;

$('#tamagotchi').hide();

const howToPlay = $("#instructions");
$(howToPlay).on('click', function() {
  alert("To play choose your character and characters name. Your character will age periodically");
})

// Update timer and age during game
function renderStats() {
  $("#timer").text(`Time: ${timer}`);
  $("#age").text(`Age: ${age}`);
  $("#feedtimer").text(`Feed Me: ${newPet.hunger}`);
  $("#sleeptimer").text(`I'm Sleepy: ${newPet.sleepiness}`);
  $("#playtimer").text(`I'm Bored: ${newPet.boredom}`);
};

// Counter function to increment age of character and time duration played
function startTimer() {
  const counter = setInterval(function() {
    timer++;
    if(timer % 15 === 0){
      age++;
    }
    if(timer % 10 === 0) {
      newPet.hunger++;
    }
    if(timer % 20 === 0) {
      newPet.sleepiness++;
    }
    if(timer % 30 === 0) {
      newPet.boredom++;
    }
    // if (newPet.hunger === 10 || newPet.sleepiness === 10 || newPet.boredom === 10) {
    //   alert('GAME OVER! =(');
    //   const playAgain = prompt('Would you like to play again?')
    //   if (playAgain === "yes") {
    //     petName;
    //   } else {
    //     alert('Better luck next time...');
    //   }
    // }
    renderStats();
    
  }, 1000);
};

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
  petName = prompt("Enter the name of your pet: ");
  $("#pet-name").append(petName);
  $("#tamagotchi").show();
  newPet = new Tamagotchi();
  console.log(newPet);
  startTimer();
});

// Button handlers to decrement values on click
const feedMeBtn = $("#feedme");
$(feedMeBtn).on('click', function() {
  if(newPet.hunger > 0) {
    newPet.hunger--;
  }
});

const playBtn = $("#play");
$(playBtn).on('click', function() {
  if(newPet.boredom > 0) {
    newPet.boredom--;
  }
});

const sleepBtn = $("#sleep");
$(sleepBtn).on('click', function() {
  if(newPet.sleepiness > 0) {
    newPet.sleepiness--;
  }
});




