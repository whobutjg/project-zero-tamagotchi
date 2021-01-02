// Global variables for time, age, and creating a new pet
let timer = 0;
let age = 0;
let newPet = null;
let petName = null;
let counter = 0;

$("#tamagotchi").hide();

const howToPlay = $("#instructions");
$(howToPlay).on('click', function () {
    $("#how-to-play").toggle();
    
});

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
    counter = setInterval(function () {
    if (newPet.hunger >= 10 || newPet.sleepiness >= 10 || newPet.boredom >= 10) {
      gameOver();
    }
    timer++;
    if (timer % 50 === 0) {
      age++;
    }
    if (timer % 15 === 0) {
      newPet.hunger++;
    }
    if (timer % 30 === 0) {
      newPet.sleepiness++;
    }
    if (timer % 45 === 0) {
      newPet.boredom++;
    }
    renderStats();
  }, 1000);
}

// Main tamagotchi class
class Tamagotchi {
  constructor() {
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
  }
}

// Start game function to begin playing
$("#start").on("click", startGame);
function startGame() {
  petName = $("#input").val();
  if ($("#input").val() === "") {
  } else {
    timer = 0;
    $("#pet-name").text(petName);
    $("#tamagotchi").show();
    newPet = new Tamagotchi();
    renderStats();
    // console.log(newPet);
    $("#main-buttons").hide();
    startTimer();
    $("#home-logo").css("margin-top", "20px");
  }
}

// Button handlers to decrement values on click
const feedMeBtn = $("#feedme");
$(feedMeBtn).on("click", function () {
  if (newPet.hunger > 0) {
    $("#pikachu").attr("src", "/images/pikachu2.gif");
    newPet.hunger--;
    setTimeout(function () {
      $("#pikachu").attr("src", "/images/pikachu1.gif");
    }, 1500);
  }
});

const playBtn = $("#play");
$(playBtn).on("click", function () {
  if (newPet.boredom > 0) {
    $("#pikachu").attr("src", "/images/pikachu4.gif");
    newPet.boredom--;
    setTimeout(function () {
      $("#pikachu").attr("src", "/images/pikachu1.gif");
    }, 1500);
  }
});

const sleepBtn = $("#sleep");
$(sleepBtn).on("click", function () {
  if (newPet.sleepiness > 0) {
    $("#pikachu").attr("src", "/images/pikachu5.gif");
    newPet.sleepiness--;
    setTimeout(function () {
      $("#pikachu").attr("src", "/images/pikachu1.gif");
    }, 1500);
  }
});

const resetGameFunc = () => {
  $("#tamagotchi").hide();
  $("#main-buttons").show();
  $("#resetButton").remove();
  $("#charizard").remove();
  $("#pikachu").attr("src", "/images/pikachu1.gif");
  $("#pikachu").addClass("pikachuMove");
  $("#home-logo").css("margin-top", "250px");
};

// Game over function
const gameOver = () => {
    $("#pikachu").attr("src", "/images/rip.gif");
    $("#pikachu").removeClass("pikachuMove");
    let charizard = $(`<img id="charizard" src="/images/charizard.gif">`);
    $("#character").append(charizard);
    let resetButton = $(`<button id="resetButton">Reset</button>`);
    $("#character").prepend(resetButton);
    clearInterval(counter);
    $("#resetButton").on("click", resetGameFunc);
};
