// Global variables for time, age, and creating a new pet
let timer = 0;
let age = 0;
let newPet = null;
let petName = null;

$('#tamagotchi').hide();

const howToPlay = $("#instructions");
$(howToPlay).on('click', function() {
  alert("To play choose your character and characters name. Your character will age periodically and it's hunger, boredom, and sleepiness will continue to go up. Interact with your charcter to keep it's levels low. If any one of the meters should reach 10..game over!");
})

// Update timer and age during game
function renderStats() {
  $("#timer").text(`Time: ${timer}`);
  $("#age").text(`Age: ${age}`);
  $("#feedtimer").val(`${newPet.hunger}`);
  $("#sleeptimer").val(`${newPet.sleepiness}`);
  $("#playtimer").val(`${newPet.boredom}`);
};

// Counter function to increment age of character and time duration played
function startTimer() {
  const counter = setInterval(function() {
    timer++;
    if(timer % 50 === 0){
      age++;
    }
    if(timer % 5 === 0) {
      newPet.hunger++;
    }
    if(timer % 7 === 0) {
      newPet.sleepiness++;
    }
    if(timer % 9 === 0) {
      newPet.boredom++;
    }
    //  {
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
  petName = $("#input").val();
  if ($('#input').val() === '') {
  } else {
  $("#pet-name").text(petName);
  $("#tamagotchi").show();
  $("#main-buttons").toggleClass();
  newPet = new Tamagotchi();
  console.log(newPet);
  $("#main-buttons").hide();
  startTimer();
  }
});

// Button handlers to decrement values on click
const feedMeBtn = $("#feedme");
$(feedMeBtn).on('click', function() {
  if(newPet.hunger > 0) {
    $("#pikachu").attr("src", "/images/pikachu2.gif");
    newPet.hunger--;
    setTimeout(function() {
      $("#pikachu").attr("src", "/images/pikachu1.gif");
    },1500);
  }
});

const playBtn = $("#play");
$(playBtn).on('click', function() {
  if(newPet.boredom > 0) {
    $("#pikachu").attr("src", "/images/pikachu4.gif");
    newPet.boredom--;
    setTimeout(function() {
      $("#pikachu").attr("src", "/images/pikachu1.gif");
    },1500);
  }
});

const sleepBtn = $("#sleep");
$(sleepBtn).on('click', function() {
  if(newPet.sleepiness > 0) {
    $("#pikachu").attr("src", "/images/pikachu5.gif");
    newPet.sleepiness--;
    setTimeout(function() {
      $("#pikachu").attr("src", "/images/pikachu1.gif");
    },1500);
  }
});

// const gameOver = setInterval(() => {
//   if (newPet.hunger === 10 || newPet.sleepiness === 10 || newPet.boredom === 10)
// }, interval);


